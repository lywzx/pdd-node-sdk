import { NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT } from '../constant';
import { bindEventArray, PDD_CLIENT_BIND_EVENTS_TOKEN } from '../constant/constant-decorator';
import isFunction from 'lodash/isFunction';
import castArray from 'lodash/castArray';

/**
 * 绑定出错时的信息
 */
export function catchError(
  clientName: string | string[] = NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT
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
    const old = Reflect.getMetadata(PDD_CLIENT_BIND_EVENTS_TOKEN, target) || [];
    Reflect.defineMetadata(
      PDD_CLIENT_BIND_EVENTS_TOKEN,
      [...old, ['error', propertyKey, castArray(clientName)]],
      target
    );
    return descriptor;
  };
}
