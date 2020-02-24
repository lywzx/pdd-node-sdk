import {
  createRequestClassName,
  createResponseClassName,
  generateConstant,
  saveCode,
  getPddResponseRootKey,
} from './index';
import {
  ApiDetailInterface,
  ApiDetailRequestParamInterface,
  ApiDetailResponseParamInterface,
} from '../interface/api-detail.interface';
import { tree } from './index';
import { CodeColumnInterface, CodeInterface } from '../interface/code.interface';
import { TreeType } from '../interface/tree.interface';
import { RunStateFileInterface, RunStateInterface } from '../interface/run-state.interface';
import { map, flattenDeep } from 'lodash';

// 创建代码
export function generateCode(apiId: string, detail: ApiDetailInterface) {
  const apiIdConstant = generateConstant(apiId);

  const apiResponseValue = getPddResponseRootKey(detail);
  let exportResponseShortKey = '';
  if (apiResponseValue) {
    exportResponseShortKey = `export const ${apiIdConstant}_RESPONSE_KEY = '${apiResponseValue}';`;
  }

  const requestClassCode = buildParamsToCodeArr(detail.requestParamList, detail, 'request');

  const responseClassCode = buildParamsToCodeArr(detail.responseParamList, detail, 'response');

  return `export const ${apiIdConstant} = '${apiId}';
${exportResponseShortKey}

${codeToString(requestClassCode)}

${codeToString(responseClassCode)}
`;
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
      if (current.paramType === 'OBJECT' || current.paramType === 'MAP') {
        type = itCls;
      } else if (current.paramType === 'OBJECT[]' || current.paramType === 'MAP[]') {
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
    .map((it: CodeInterface) => {
      return `
${buildComment(it.comment, 0)}${
        it.columns.length === 0 ? '\n// eslint-disable-next-line @typescript-eslint/no-empty-interface' : ''
      }
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
  LONG: 'string',
  INTEGER: 'number',
  MAP: 'object',
  DOUBLE: 'string',
};
function pddTypeToTypescriptType(type: string) {
  const onlyType = type.replace('[]', '');
  const toType = (typeMap as any)[onlyType] || onlyType.toLowerCase();
  if (onlyType === type) {
    return toType;
  } else {
    return `${toType}[]`;
  }
}

/**
 * 生成首页文件
 * @param state
 */
export async function generatorIndexCode(state: RunStateInterface) {
  const importCodes = map(state.resolvedFiles, resolved => {
    return [
      `// ${resolved.name}`,
      ...map(resolved.files, (fl: RunStateFileInterface) => {
        const variables = [
          fl.constVariable,
          fl.responseKey,
          fl.requestInterface,
          fl.responseInterface,
          fl.secoundResponseInterface,
        ]
          .filter(it => !!it)
          .join(',\n  ');
        return `import {
  ${variables}
} from '${fl.name}';`;
      }),
    ].join('\n');
  });

  const flattenResolvedFiles = flattenDeep(map(state.resolvedFiles, 'files'));

  const PddResponseTypeAndRequestTypeMapping = 'PddResponseTypeAndRequestTypeMapping';
  const typeAndResponseKeyMappingInnerCode = map(flattenResolvedFiles, (it: RunStateFileInterface) => {
    if (it.responseKey) {
      return `[${it.constVariable}]: ${it.responseKey}`;
    }
    return undefined;
  })
    .filter(it => !!it)
    .join(',\n  ');
  const typeAndResponseKeyMappingCode = `const ${PddResponseTypeAndRequestTypeMapping} = {
  ${typeAndResponseKeyMappingInnerCode}
};`;

  const exportVariables = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return [fl.constVariable, fl.responseKey, fl.requestInterface, fl.responseInterface, fl.secoundResponseInterface]
      .filter(it => !!it)
      .join(',\n  ');
  })
    .concat(PddResponseTypeAndRequestTypeMapping)
    .join(',\n  ');

  const exportVariablesCode = `export {
  ${exportVariables},
};`;

  const pddCollectRequestInterfaceInnerCode = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return `[${fl.constVariable}]: ${fl.requestInterface};`;
  }).join('\n  ');
  const exportPddRequestInterfaceCode = `export interface PddCollectRequestInterface {
  ${pddCollectRequestInterfaceInnerCode}
}`;

  const pddCollectResponseInterfaceInnerCode = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return `[${fl.constVariable}]: ${fl.responseInterface};`;
  }).join('\n  ');
  const exportPddResponseInterfaceCode = `export interface PddCollectRootResponseInterface {
  ${pddCollectResponseInterfaceInnerCode}
}`;

  const pddCollectResponseSecondInterfaceInnerCode = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return `[${fl.constVariable}]: ${
      !!fl.secoundResponseInterface ? fl.secoundResponseInterface : fl.responseInterface
    };`;
  }).join('\n  ');
  const pddCollectResponseSecondInterfaceCode = `export interface PddCollectShortResponseInterface {
  ${pddCollectResponseSecondInterfaceInnerCode}
}`;

  /*const apiTypesString = map(flattenResolvedFiles, (fl: RunStateFileInterface) => {
    return fl.constVariable;
  }).join(' | ');*/
  return saveCode(
    'src/pddApi/index.ts',
    [
      ...importCodes,
      typeAndResponseKeyMappingCode,
      exportVariablesCode,
      exportPddRequestInterfaceCode,
      exportPddResponseInterfaceCode,
      pddCollectResponseSecondInterfaceCode,
      generateCommonRequestInterfaceCode('string'),
    ].join('\n')
  );
}

function generateCommonRequestInterfaceCode(type: string) {
  return `export interface PddCommonRequestInterface {
  /**
   * API接口名称
   */
  type: ${type};

  /**
   * POP分配给应用的client_id
   */
  client_id: string;

  /**
   * 通过code获取的access_token(无需授权的接口，该字段不参与sign签名运算)
   */
  access_token?: string;

  /**
   * UNIX时间戳，单位秒，需要与拼多多服务器时间差值在10分钟内
   */
  timestamp: number;

  /**
   * 响应格式，即返回数据的格式，JSON或者XML（二选一），默认JSON，注意是大写
   * @default JSON
   */
  data_type?: 'JSON' | 'XML';

  /**
   * API协议版本号，默认为V1，可不填
   * @default V1
   */
  version?: string;

  /**
   * API输入参数签名结果，签名算法参考开放平台接入指南第三部分底部。
   */
  sign: string;
}`;
}
