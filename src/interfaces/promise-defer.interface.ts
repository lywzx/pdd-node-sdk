export interface PromiseDefer<T> {
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
}
