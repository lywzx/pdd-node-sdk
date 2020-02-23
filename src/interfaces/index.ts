import { PddCommonRequestInterface } from '../pddApi';

export * from './async-result-callback.interface';

export * from './pdd-client-options.interface';

export type RequestParamsType = Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'> & {
  [s: string]: any;
};

export type RequestParamsFullType = PddCommonRequestInterface & { [s: string]: any };
