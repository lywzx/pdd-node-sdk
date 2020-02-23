export interface AsyncResultCallbackInterface<T, E = Error> {
  (err?: E | null, result?: T): void;
}
