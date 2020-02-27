import axios, { AxiosInstance } from 'axios';
import { PddClientOptionsInterface } from '../interfaces/pdd-client-options.interface';
import { stringify } from 'querystring';
import { PddException } from '../exceptions';
import { isObject, once } from 'lodash';
import { APPLICATION_FORM, APPLICATION_JSON } from '../constant/content-type';
import { get } from 'lodash';

const axiosInstance: AxiosInstance = axios.create({});

axiosInstance.defaults.headers.post['Content-Type'] = APPLICATION_FORM;
axiosInstance.defaults.headers.post.Accept = 'application/json';

type methodTypes = 'get' | 'post' | 'delete' | 'put';

function createMethods(method: methodTypes) {
  return function f(url: string, data = {}, options = {}) {
    const requestData: any = {};
    if (method === 'get') {
      requestData.params = data;
    } else {
      if (get(options, 'headers.Content-Type') === APPLICATION_JSON) {
        requestData.data = JSON.stringify(data);
      } else {
        requestData.data = stringify(data);
      }
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
  static set = once((options: PddClientOptionsInterface) => {
    axiosInstance.defaults.baseURL = options.endpoint;
    axiosInstance.defaults.url = '';

    axiosInstance.interceptors.response.use(response => {
      const data = response.data;

      if (isObject(data) && 'error_response' in data) {
        throw new PddException((data as any).error_response as any);
      }

      return data;
    });
  });
}

type requestFnType = (...arg: any) => Promise<any>;
export interface NetworkAdapterInterface {
  get: requestFnType;
  post: requestFnType;
  delete: requestFnType;
  put: requestFnType;
  set?: (options: any) => void;
}
