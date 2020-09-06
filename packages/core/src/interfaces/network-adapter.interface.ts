type requestFnType = (...arg: any) => Promise<any>;

export interface NetworkAdapterInterface {
  get: requestFnType;
  post: requestFnType;
  delete: requestFnType;
  put: requestFnType;
  set?: (options: any) => void;
}
