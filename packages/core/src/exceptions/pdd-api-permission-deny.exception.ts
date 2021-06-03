import { PddBaseException } from './pdd-base.exception';
import { bindErrorConstructor } from '../util';

/**
 * 调用API接口时，检测无当前接口权限时
 */
export class PddApiPermissionDenyException extends PddBaseException {
  constructor(shopId: string | number, api: string) {
    super(`shop id:${shopId} visit ${api} permission deny!`);
    bindErrorConstructor(this, PddApiPermissionDenyException);
  }
}
