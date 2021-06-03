import { bindErrorConstructor } from '../util';

/**
 * pdd base exception
 */
export class PddBaseException extends Error {
  constructor(m: string) {
    super(m);
    bindErrorConstructor(this, PddBaseException);
  }
}
