import { PddCommonRequestInterface } from '@pin-duo-duo/pdd-origin-api';

export type RequestParamsType = Partial<Omit<PddCommonRequestInterface, 'sign' | 'timestamp' | 'client_id'>> & {
  [s: string]: any;
};
export type RequestParamsFullType = PddCommonRequestInterface & { [s: string]: any };
export type DefaultRequestType = Pick<PddCommonRequestInterface, 'data_type' | 'version'>;
