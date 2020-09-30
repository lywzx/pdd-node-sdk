import { PddClientErrorListener } from '@pin-duo-duo/core';
import { bindEventArray, PDD_CLIENT_BIND_EVENTS_TOKEN } from '../constant/constant-decorator';
import isFunction from 'lodash/isFunction';

/**
 * 绑定出错时的信息
 */
export function catchError(
  clientId: string | null = null,
  filter: (...args: Parameters<PddClientErrorListener<any>>) => boolean = () => true
): MethodDecorator | PropertyDecorator {
  return function <T>(
    target: Record<string, any>,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void {
    if (!isFunction((target as any)[propertyKey])) {
      throw new Error('bind event should be function');
    }
    if (!bindEventArray.includes(target)) {
      bindEventArray.push(target);
    }
    Reflect.defineMetadata(PDD_CLIENT_BIND_EVENTS_TOKEN, ['error', filter, clientId], target, propertyKey);
    return descriptor;
  };
}
