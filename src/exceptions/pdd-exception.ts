import { get } from 'lodash';

export class PddException extends Error {
  constructor(public errObj: PddErrorResponse) {
    super(errObj.toString());
  }

  public retryAble(): boolean {
    const errorCode = get(this, 'errObj.error_code') as number;
    return [70031, 70032, 70033, 70034].includes(errorCode);
  }
}

type PddErrorResponse = {
  error_msg: string;
  sub_msg: string;
  sub_code: null | number;
  error_code: number;
  request_id: string;
};
