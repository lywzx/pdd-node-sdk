import axios, { AxiosInstance } from 'axios';
import { PddClientOptionsInterface } from '../interfaces';
import { stringify } from 'querystring';
import { PddResponseException } from '../exceptions';
import isObject from 'lodash/isObject';
import once from 'lodash/once';
import get from 'lodash/get';
import extend from 'lodash/extend';
import { APPLICATION_FORM, APPLICATION_JSON } from '../constant/content-type';
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';

const axiosInstance: AxiosInstance = axios.create({
  httpsAgent: new HttpsAgent({
    keepAlive: true,
    keepAliveMsecs: 10000,
  }),
  httpAgent: new HttpAgent({
    keepAlive: true,
    keepAliveMsecs: 10000,
  }),
});

axiosInstance.defaults.headers.post['Content-Type'] = APPLICATION_FORM;
axiosInstance.defaults.headers.post.Accept = 'application/json';

type methodTypes = 'get' | 'post' | 'delete' | 'put';
/* istanbul ignore next */
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

/**
 * 系统默认的网络请求库
 */
/* istanbul ignore next */
export class NetworkAdapter {
  public static axiosInstance = axiosInstance;
  static get = createMethods('get');
  static post = createMethods('post');
  static delete = createMethods('delete');
  static put = createMethods('put');
  static set = once((options: PddClientOptionsInterface) => {
    if (options.axiosRequestConfig) {
      extend(axiosInstance.defaults, options.axiosRequestConfig);
    }
    axiosInstance.defaults.baseURL = options.endpoint;
    axiosInstance.defaults.url = '';

    axiosInstance.interceptors.response.use(response => {
      const data = response.data;

      if (isObject(data) && 'error_response' in data) {
        throw new PddResponseException((data as any).error_response as any);
      }

      return data;
    });
  });
}
