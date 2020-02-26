import { PddCommonRequestInterface } from '../pddApi';

export * from './async-result-callback.interface';

export * from './pdd-client-options.interface';

export * from './retry-options.interface';

export * from './pdd-client-o-auth-options.interface';

export * from './pdd-o-auth-link.interface';

export type RequestParamsType = Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'> & {
  [s: string]: any;
};

export type RequestParamsFullType = PddCommonRequestInterface & { [s: string]: any };
