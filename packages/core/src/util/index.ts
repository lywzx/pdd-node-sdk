import CryptoJS from 'crypto-js';
import { PddRequestParamsMissingException } from '../exceptions/pdd-request-params-missing-exception';
import { AsyncResultCallbackInterface, PromiseDefer } from '../interfaces';

/**
 * MD5加密字符
 * @param str
 */
export function md5(str: string) {
  return CryptoJS.MD5(str).toString(CryptoJS.enc.Hex);
}

/**
 * 处理日期格式化
 * @param d Date
 * @param mask string
 */
export function formatDate(d: Date, mask: string): string {
  const zeroize = function(value: string | number, length = 2) {
    value = String(value);
    let i = 0;
    let zeros = '';
    for (; i < length - value.length; i++) {
      zeros += '0';
    }
    return zeros + value;
  };
  return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, ($0: any) => {
    switch ($0) {
      case 'd':
        return d.getDate();
      case 'dd':
        return zeroize(d.getDate());
      case 'ddd':
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
      case 'dddd':
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
      case 'M':
        return d.getMonth() + 1;
      case 'MM':
        return zeroize(d.getMonth() + 1);
      case 'MMM':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
      case 'MMMM':
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ][d.getMonth()];
      case 'yy':
        return String(d.getFullYear()).substr(2);
      case 'yyyy':
        return d.getFullYear();
      case 'h':
        return d.getHours() % 12 || 12;
      case 'hh':
        return zeroize(d.getHours() % 12 || 12);
      case 'H':
        return d.getHours();
      case 'HH':
        return zeroize(d.getHours());
      case 'm':
        return d.getMinutes();
      case 'mm':
        return zeroize(d.getMinutes());
      case 's':
        return d.getSeconds();
      case 'ss':
        return zeroize(d.getSeconds());
      case 'l':
        return zeroize(d.getMilliseconds(), 3);
      case 'L':
        let m = d.getMilliseconds();
        if (m > 99) m = Math.round(m / 10);
        return zeroize(m);
      case 'tt':
        return d.getHours() < 12 ? 'am' : 'pm';
      case 'TT':
        return d.getHours() < 12 ? 'AM' : 'PM';
      case 'Z':
        return d.toUTCString().match(/[A-Z]+$/);
      // Return quoted strings with the surrounding quotes removed

      default:
        return $0.substr(1, $0.length - 2);
    }
  });
}

/**
 * generate defer from promise
 */
export function defer<T>(): PromiseDefer<T> {
  let resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void;
  const promise = new Promise<T>((rs, rj) => {
    resolve = rs;
    reject = rj;
  });
  return {
    promise,
    // @ts-ignore
    resolve,
    // @ts-ignore
    reject,
  };
}

/**
 * check params is required
 * @param params
 * @param keys
 */
export function checkRequired(params: object, keys: string | string[]) {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  for (let i = 0, l = keys.length; i < l; i++) {
    const k = keys[i];
    if (!params.hasOwnProperty(k)) {
      return new PddRequestParamsMissingException('ParameterMissingError', '`' + k + '` required');
    }
  }
}

/**
 * 获取时间戳，以秒为单位
 * @param dt
 */
export function timestamp(dt = new Date()) {
  return parseInt((dt.getTime() / 1000).toString(), 10);
}

/**
 * 将promise转成callback形式
 * @param promise
 * @param callback
 */
export function promseToCallback<R, E = never>(promise: Promise<R>): Promise<R>;
export function promseToCallback<R, E = never>(promise: Promise<R>, callback: AsyncResultCallbackInterface<R, E>): void;
export function promseToCallback<R, E = never>(
  promise: Promise<R>,
  callback?: AsyncResultCallbackInterface<R, E>
): Promise<R> | void {
  if (typeof callback === 'function') {
    promise.then(
      response => {
        callback(null, response);
      },
      err => {
        callback(err);
      }
    );
  } else {
    return promise;
  }
}
