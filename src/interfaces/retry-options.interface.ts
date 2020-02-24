export interface RetryOptionsInterface {
  times?: number;
  interval?: number | ((retryCount: number) => number);
  errorFilter?: (error: Error) => boolean;
}
