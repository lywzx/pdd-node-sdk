import tinyPinYin from 'tiny-pinyin';
import { camelCase, startCase, keys } from 'lodash';
import * as fs from 'fs';
import { normalize, sep } from 'path';
import { promisify } from 'util';
import { TreeType } from '../interface/tree.interface';
import { ApiDetailInterface, ApiDetailResponseParamInterface } from '../interface/api-detail.interface';

export function nameToDirectoryName(name: string): string {
  if (tinyPinYin.isSupported()) {
    const py = tinyPinYin.convertToPinyin(name.replace('API', ''), '_', true);
    return camelCase(py);
  }
  return '';
}

// 创建类名
export function createClassName(apiId: string) {
  return startCase(apiId).replace(/[ ]/g, '');
}

// 创建请求类名
export function createRequestClassName(apiId: string) {
  return `${createClassName(apiId)}RequestInterface`;
}

// 创建响应的API类名
export function createResponseClassName(apiId: string) {
  return `${createClassName(apiId)}ResponseInterface`;
}

/**
 * 判断是否为目录
 * @param dir
 */
export function isDir(dir: string) {
  return promisify(fs.lstat)(dir).then(
    stat => stat.isDirectory(),
    err => false
  );
}

/**
 * 递归创建目录
 * @param dir
 */
const mkdirPromisify = promisify(fs.mkdir);
export async function createDirectory(dir: string) {
  const dirArr = normalize(dir).split(sep);

  const directoryLength = dirArr.length;
  let index = 0;
  while (index < directoryLength) {
    const currentDir = dirArr.slice(0, index + 1).join(sep);
    if (!(await isDir(currentDir))) {
      await mkdirPromisify(currentDir);
    }
    index++;
  }
  return true;
}

// 保存代码至目录
const writeFile = promisify(fs.writeFile);
export async function saveCode(file: string, code: string) {
  const filePath = normalize(file).split(sep);
  filePath.pop();
  if (await createDirectory(filePath.join(sep))) {
    return writeFile(file, code);
  }
}

/**
 * 将数据转化成树开结构
 * @param arr 原始数据
 * @param pid 父级ID值
 * @param parentKey 父级的KEY
 * @param currentKey 当前级的KEY
 * @param childKey 默认子级的key
 * @param transform 转换数据
 */
export function tree<T extends {}, K extends keyof T>(
  arr: T[],
  {
    pid,
    parentKey = 'parent_id',
    currentKey = 'id',
  }: { pid: number | string; parentKey?: K | 'parent_id'; currentKey?: string },
  childKey = 'children',
  transform?: (it: T) => Pick<T, K>
): TreeType<Pick<T, K>>[] {
  const retGroup: any = {};
  for (const item of arr) {
    const pushItem = transform ? transform(item) : { ...item };
    const parentValue = typeof pushItem[parentKey as K] === 'undefined' ? '__default' : pushItem[parentKey as K];
    if (!retGroup[parentValue]) {
      retGroup[parentValue] = [];
    }
    retGroup[parentValue].push(pushItem);
  }

  const treeItem = (group: any, parentId: string | number = '__default') => {
    const items = group[parentId] || [];
    for (const it of items) {
      const parentIdValue = it[currentKey];
      if (group[parentIdValue]) {
        it[childKey] = treeItem(group, parentIdValue);
      }
    }
    return items;
  };

  return treeItem(retGroup, pid);
}

/**
 * 生成常量
 * @param apiName
 */
export function generateConstant(apiName: string): string {
  return apiName.replace(/\./g, '_').toUpperCase();
}

/**
 * 获取拼多多当中，向应的key
 * @param apiInfo
 */
export function getPddResponseRootKey(apiInfo: ApiDetailInterface): string | void {
  const treed = tree(apiInfo.responseParamList, { parentKey: 'parentId', currentKey: 'id', pid: 0 } as any);
  const first: ApiDetailResponseParamInterface = treed[0];
  const limitType = ['OBJECT', 'OBJECT[]', 'MAP'];
  if (
    treed.length === 1 &&
    ((first && first.paramName) || '').match(/_response$/) &&
    limitType.includes(first.paramType)
  ) {
    return first.paramName;
  }
}
