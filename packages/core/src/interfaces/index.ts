import { PddCommonRequestInterface } from '@pin-duo-duo/pdd-origin-api';

export * from './pdd-client-options.interface';

export * from './async-result-callback.interface';

export * from './retry-options.interface';

export * from './pdd-client-o-auth-options.interface';

export * from './pdd-o-auth-link.interface';

export * from './pdd-access-token-response.interface';

export * from './promise-defer.interface';

export type RequestParamsType = Partial<Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>> & {
  [s: string]: any;
};

export type RequestParamsFullType = PddCommonRequestInterface & { [s: string]: any };
