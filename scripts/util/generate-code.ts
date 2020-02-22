import { createRequestClassName, createResponseClassName, generateConstant, saveCode } from './index';
import {
  ApiDetailInterface,
  ApiDetailRequestParamInterface,
  ApiDetailResponseParamInterface,
} from '../interface/api-detail.interface';
import { tree } from './index';
import { CodeColumnInterface, CodeInterface } from '../interface/code.interface';
import { TreeType } from '../interface/tree.interface';
import { RunStateFileInterface, RunStateInterface } from '../interface/run-state.interface';
import { map, zip, flatten } from 'lodash';

// 创建代码
export function generateCode(apiId: string, detail: ApiDetailInterface) {
  const apiIdConstant = generateConstant(apiId);

  const requestClassCode = buildParamsToCodeArr(detail.requestParamList, detail, 'request');

  const responseClassCode = buildParamsToCodeArr(detail.responseParamList, detail, 'response');

  return `export const ${apiIdConstant} = '${apiIdConstant}';

${codeToString(requestClassCode)}

${codeToString(responseClassCode)}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [${apiIdConstant}]: {
    requestInterface: ${createRequestClassName(apiId)};
    responseInterface: ${createResponseClassName(apiId)};
  }
}`;
}

export function buildParamsToCodeArr(
  params: ApiDetailRequestParamInterface[] | ApiDetailResponseParamInterface[],
  apiDetail: ApiDetailInterface,
  type: 'request' | 'response'
): CodeInterface[] {
  const treed = tree(params as any, { parentKey: 'parentId', currentKey: 'id', pid: 0 } as any);
  const scopeName = apiDetail.scopeName;

  const clsFn = type === 'request' ? createRequestClassName : createResponseClassName;
  const baseInterface: CodeInterface = {
    name: clsFn(apiDetail.scopeName),
    comment: `接口名称：${apiDetail.apiName}
接口标识：${scopeName}
接口使用场景：${apiDetail.usageScenarios}`,
    columns: [],
  };

  return buildInterfaceColumn(baseInterface, treed as any, type);
}

/**
 * 构建请求的interface
 * @param inter
 * @param columns
 * @param t
 */
export function buildInterfaceColumn(
  inter: CodeInterface,
  columns: TreeType<ApiDetailRequestParamInterface>[] | TreeType<ApiDetailResponseParamInterface>[],
  t: 'request' | 'response'
): CodeInterface[] {
  const ret: CodeInterface[] = [inter];
  const createFn = t === 'request' ? createRequestClassName : createResponseClassName;

  const columnsClone = columns.slice();
  let current: TreeType<ApiDetailRequestParamInterface> | TreeType<ApiDetailResponseParamInterface> | undefined;
  while ((current = columnsClone.shift())) {
    const name = current.paramName;
    let type;
    const optional = 'isMust' in current ? !!current.isMust : false;
    let comment;
    const example = current.example;
    if (current.childrenNum == 0) {
      // 没有了细点
      type = pddTypeToTypescriptType(current.paramType);
      comment = `@description: ${current.paramDesc}
@type: ${type}
@default: ${'defaultValue' in current ? current.defaultValue : ''}`;
    } else {
      const plainName = `${inter.name.replace(t === 'request' ? 'RequestInterface' : 'ResponseInterface', '')}_${
        current.paramName
      }`;
      const itCls = createFn(plainName);
      if (current.children && current.children.length) {
        // 需要再创建一个interface
        const innerIt: CodeInterface = {
          name: itCls,
          comment: `@description ${current.paramDesc}
@default ${'defaultValue' in current ? current.defaultValue : ''}
@example ${current.example}`,
          columns: [],
        };
        ret.push(...buildInterfaceColumn(innerIt, current.children, t));
      }
      if (current.paramType === 'OBJECT') {
        type = itCls;
      } else if (current.paramType === 'OBJECT[]') {
        type = `${itCls}[]`;
      } else {
        type = current.paramType;
      }
      comment = `@description: ${current.paramDesc}
@type: ${type}
@default: ${'defaultValue' in current ? current.defaultValue : ''}
      `;
    }
    inter.columns.push({
      name,
      type,
      optional,
      comment,
      example,
    });
  }

  return ret;
}

/**
 * 将CodeInterface转换成字符
 * @param arr
 */
function codeToString(arr: CodeInterface[]): string {
  const buildComment = (comment: string, indent = 0) => {
    const commentArr = comment.split(/\n/g);
    const commentArrWithComment = commentArr.map(it => {
      return ` * ${it}`;
    });
    return ['/**', ...commentArrWithComment, ' **/']
      .map((it: string) => {
        return `${' '.repeat(indent)}${it}`;
      })
      .join('\n');
  };

  const buildColumns = (columns: CodeColumnInterface[], indent = 2) => {
    return columns
      .map((column: CodeColumnInterface) => {
        return [
          buildComment(column.comment, indent),
          `${' '.repeat(indent)}${column.name}${column.optional ? '?' : ''}: ${column.type};`,
        ].join('\n');
      })
      .join('\n\n');
  };

  return arr
    .map(function(it: CodeInterface) {
      return `
${buildComment(
  it.comment,
  0
)}${it.columns.length === 0 ? '\n// eslint-disable-next-line @typescript-eslint/no-empty-interface' : ''}
export interface ${it.name} {
${buildColumns(it.columns, 2)}
}`;
    })
    .join('\n\n');
}

/**
 * 转换拼多多的类型
 */
const typeMap = {
  OBJECT: 'object',
  LONG: 'string',
  STRING: 'string',
  INTEGER: 'number',
  'OBJECT[]': 'any[]',
  BOOLEAN: 'boolean',
};
function pddTypeToTypescriptType(type: string) {
  return (typeMap as any)[type] || 'string';
}

/**
 * 生成首页文件
 * @param state
 */
export async function generatorIndexCode(state: RunStateInterface) {
  const exportAnyCode = map(state.resolvedFiles, (resolved, directory: string) => {
    return [
      `// ${resolved.name}`,
      ...map(resolved.files, (file: RunStateFileInterface) => {
        return `export * from '${file.name}';`;
      }),
    ].join('\n');
  });

  const [importDefault, variables] = zip(
    ...map(state.resolvedFiles, resolved => {
      return [
        map(resolved.files, (file: RunStateFileInterface) => `import ${file.constVariable} from '${file.name}';`),
        map(resolved.files, 'constVariable'),
      ];
    })
  );
  const importDefaultCodeArr = flatten(importDefault);
  const exportDefaultType = [`type defaultType = ${flatten(variables).join(' & ')};`, 'export default defaultType;'];

  return saveCode('src/pddApi/index.ts', [...exportAnyCode, ...importDefaultCodeArr, ...exportDefaultType].join('\n'));
}
