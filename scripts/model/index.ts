import axios from 'axios';
import { Exception } from './exception';
import { CategoryListItemInterface } from '../interface/category-list-item.interface';
import { nameToDirectoryName } from '../util';
import { ApiListInterface } from '../interface/api-list.interface';
import { ApiDetailInterface } from '../interface/api-detail.interface';

const instance = axios.create({
  baseURL: 'https://open-api.pinduoduo.com',
  timeout: 5000,
  headers: {
    Origin: 'https://open.pinduoduo.com',
    Referer: 'https://open.pinduoduo.com/',
  },
});

instance.interceptors.response.use((value: any) => {
  const data = value.data || {};
  if (data.success) {
    return value.data.result;
  } else {
    throw new Exception(value.data.errorMsg, value.data.errorCode);
  }
});

// 获取API的所有分类
export function getAllApiCategory(): Promise<CategoryListItemInterface[]> {
  return instance.post('/pop/doc/category/list').then((value: any) => {
    return (value as any[]).map(function(item) {
      return Object.assign({}, item, {
        directory: nameToDirectoryName(item.name),
      });
    });
  });
}

// 通过分类ID，获取当前的所有API列表
export function getAllApiListByCategoryId(catId: number | string): Promise<ApiListInterface> {
  return instance.post('/pop/doc/info/list/byCat', { id: catId });
}

// 通过API的ID，来获取API详细信息
export function getApiDetailByApiId(apiId: string): Promise<ApiDetailInterface> {
  return instance.post('/pop/doc/info/get', { id: apiId });
}
