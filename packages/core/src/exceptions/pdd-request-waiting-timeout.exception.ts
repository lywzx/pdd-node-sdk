/**
 * 拼多多调用等待超时
 */
export class PddRequestWaitingTimeoutException extends Error {
  constructor(api: string, waiting: number, msg = '') {
    super(`api name:${api} has been waiting ${waiting}ms, but has now choice to call pdd api. ${msg}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = this.constructor.name;
  }
}
