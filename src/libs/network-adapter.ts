import axios, { AxiosInstance } from 'axios';
import { PddClientOptionsInterface } from '../interfaces/pdd-client-options.interface';

const axiosInstance: AxiosInstance = axios.create({});

// axios.interceptors.response.use();
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axiosInstance.defaults.headers.post.Accept = 'application/json';

type methodTypes = 'get' | 'post' | 'delete' | 'put';

function createMethods(method: methodTypes) {
  return function f(url: string, data = {}, options = {}) {
    const requestData: any = {};
    if (method === 'get') {
      requestData.params = data;
    } else {
      requestData.data = JSON.stringify(data);
    }
    return axiosInstance({
      url,
      method,
      ...requestData,
      ...options,
    }).then(response => response.data);
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

    /*axiosInstance.interceptors.request.use(() => {

    });

    axiosInstance.interceptors.response.use(() => {

    });*/
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
