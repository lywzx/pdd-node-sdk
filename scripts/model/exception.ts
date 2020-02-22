export class Exception extends Error {
  constructor(errMsg: string, public errCode: number) {
    super(errMsg);
  }
}
