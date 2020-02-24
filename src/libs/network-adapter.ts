import axios, { AxiosInstance } from 'axios';
import { PddClientOptionsInterface } from '../interfaces/pdd-client-options.interface';
import { stringify } from 'querystring';
import { PddException } from '../exceptions';

const axiosInstance: AxiosInstance = axios.create({});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axiosInstance.defaults.headers.post.Accept = 'application/json';

type methodTypes = 'get' | 'post' | 'delete' | 'put';

function createMethods(method: methodTypes) {
  return function f(url: string, data = {}, options = {}) {
    const requestData: any = {};
    if (method === 'get') {
      requestData.params = data;
    } else {
      requestData.data = stringify(data);
    }
    return axiosInstance({
      url,
      method,
      ...requestData,
      ...options,
    });
  };
}

export class NetworkAdapter {
  static get = createMethods('get');
  static post = createMethods('post');
  static delete = createMethods('delete');
  static put = createMethods('put');
  static set(options: PddClientOptionsInterface): void {
    axiosInstance.defaults.baseURL = options.endpoint;
    axiosInstance.defaults.url = '';

    axiosInstance.interceptors.response.use(response => {
      const data = response.data;

      if ('error_response' in data) {
        throw new PddException(data.error_response as any);
      }

      return data;
    });
  }
}

type requestFnType = (...arg: any) => Promise<any>;
export interface NetworkAdapterInterface {
  get: requestFnType;
  post: requestFnType;
  delete: requestFnType;
  put: requestFnType;
  set?: (options: any) => void;
}
