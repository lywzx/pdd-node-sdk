import { AsyncResultCallbackInterface, PromiseDefer } from '../interfaces';

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    resolve,
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    reject,
  };
}

/**
 * 将promise转成callback形式
 * @param promise
 */
export function promiseToCallback<R, E = never>(promise: Promise<R>): Promise<R>;
export function promiseToCallback<R, E = never>(
  promise: Promise<R>,
  callback: AsyncResultCallbackInterface<R, E>
): void;
export function promiseToCallback<R, E = never>(
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

/**
 * 前端等待时长
 * @param time
 * @param value
 */
export function sleep<T>(time?: number): Promise<undefined>;
export function sleep<T>(time: number, value: T): Promise<T>;
export function sleep<T>(time = 0, value?: T): Promise<undefined> | Promise<T> {
  const df = defer<T>();
  setTimeout(df.resolve, time, value);
  return df.promise;
}
