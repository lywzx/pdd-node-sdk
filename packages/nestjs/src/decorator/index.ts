import { PddClientErrorListener } from '@pin-duo-duo/core';
import { bindEventArray, PDD_CLIENT_BIND_EVENTS_TOKEN } from '../constant/constant-decorator';

/**
 * 绑定出错时的信息
 */
export function catchError(
  filter: (...args: Parameters<PddClientErrorListener<any>>) => boolean = () => true
): MethodDecorator | PropertyDecorator {
  return function<T>(
    target: Record<string, any>,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> | void {
    if (!bindEventArray.includes(target)) {
      bindEventArray.push(target);
    }
    Reflect.defineMetadata(PDD_CLIENT_BIND_EVENTS_TOKEN, ['error', filter], target, propertyKey);
    return descriptor;
  };
}
