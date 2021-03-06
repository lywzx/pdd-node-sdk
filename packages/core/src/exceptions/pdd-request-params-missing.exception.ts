import { PddBaseException } from './pdd-base.exception';
import { bindErrorConstructor } from '../util';

/**
 * 请求参数不完整报错信息
 */
export class PddRequestParamsMissingException extends PddBaseException {
  constructor(public field: string, message: string) {
    super(`${field} ${message}`);
    bindErrorConstructor(this, PddRequestParamsMissingException);
  }
}
