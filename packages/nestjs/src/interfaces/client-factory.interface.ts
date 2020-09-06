export interface PddClientAllClientsFactory<T, K extends keyof T> {
  (): T;
  (type: K): T[K];
}
