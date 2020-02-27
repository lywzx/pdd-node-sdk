import { getAllApiCategory, getAllApiListByCategoryId, getApiDetailByApiId } from './model';
import { CategoryListItemInterface } from './interface/category-list-item.interface';
import { eachLimit } from 'async';
import {
  createClassName,
  createRequestClassName,
  createResponseClassName,
  generateConstant,
  nameToDirectoryName,
  saveCode,
  getPddResponseRootKey,
} from './util';
import { join } from 'path';
import { ApiListItemInterface } from './interface/api-list.interface';
import { generateCode, generatorIndexCode } from './util/generate-code';
import {
  apiIsResolved,
  directoryIsResolved,
  getLastRunState,
  resolvedApi,
  resolvedDirectory,
  resolvedFile,
} from './util/running-status';
import { ApiDetailInterface } from './interface/api-detail.interface';

export async function init() {
  const lastRunState = await getLastRunState();

  const categories = await getAllApiCategory();

  await eachLimit(categories, 3, async (item, callback) => {
    const directory = nameToDirectoryName(item.name);
    if (directoryIsResolved(directory)) {
      return callback();
    }
    try {
      await resolveCategory(item);
      resolvedDirectory(directory);
      callback();
    } catch (e) {
      callback(e);
    }
  });

  // 生成index.ts代码
  await generatorIndexCode(lastRunState);
}

// 读取目录
async function resolveCategory(category: CategoryListItemInterface) {
  const apiList = await getAllApiListByCategoryId(category.id);
  const directory = nameToDirectoryName(category.name);

  await eachLimit(apiList.docList, 1, async (api, callback) => {
    if (apiIsResolved(api.scopeName)) {
      return callback(null);
    }
    try {
      const apiInfo = await generatorApiFile(api, apiList.catName);
      resolvedApi(api.scopeName);

      const constVariable = generateConstant(api.scopeName);
      const responseInterface = createResponseClassName(api.scopeName);
      const originResponseKey = getPddResponseRootKey(apiInfo);
      const responseKey = originResponseKey ? `${constVariable}_RESPONSE_KEY` : undefined;
      const secoundResponseInterface = originResponseKey
        ? createResponseClassName(`${responseInterface.replace('ResponseInterface', '')}_${originResponseKey}`)
        : undefined;

      resolvedFile(
        {
          directoryName: apiList.catName,
          directory,
        },
        {
          apiName: api.scopeName,
          name: `./${directory}/${createClassName(api.scopeName)}`,
          needAuth: !!apiInfo.needOauth,
          constVariable,
          requestInterface: createRequestClassName(api.scopeName),
          responseInterface,
          secoundResponseInterface,
          responseKey,
        }
      );
      callback();
    } catch (e) {
      callback(e);
    }
  });
  resolvedDirectory(directory);
}

// 读取API详细信息
async function generatorApiFile(api: ApiListItemInterface, catName: string): Promise<ApiDetailInterface> {
  const apiInfo = await getApiDetailByApiId(api.scopeName);

  const code = generateCode(api.scopeName, apiInfo);

  const fileName = join(`src/pddApi/${nameToDirectoryName(catName)}/${createClassName(api.scopeName)}.ts`);
  await saveCode(fileName, code);

  return apiInfo;
}
