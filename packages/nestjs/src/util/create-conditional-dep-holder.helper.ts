import { Inject, mixin, Optional, Type } from '@nestjs/common';
import { NEST_PDD_MODULE_OPTIONS } from '../constant';
import { MissingSharedPddConfigException } from '../exceptions/missing-shared-pdd-config.exception';

export interface IConditionalDepHolder<T = any> {
  getDependencyRef(caller: string): T;
}

export function createConditionalDepHolder<T = any>(
  depToken: string,
  optionalDep = NEST_PDD_MODULE_OPTIONS,
  errorFactory = (caller: string) => new MissingSharedPddConfigException(depToken, caller)
): Type<IConditionalDepHolder> {
  class ConditionalDepHolder {
    constructor(@Optional() @Inject(depToken) public _dependencyRef: T) {}

    getDependencyRef(caller: string): T {
      if (depToken !== optionalDep && !this._dependencyRef) {
        throw errorFactory(caller);
      }
      return this._dependencyRef;
    }
  }
  return mixin(ConditionalDepHolder);
}
