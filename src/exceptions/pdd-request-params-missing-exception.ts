export class PddRequestParamsMissingException extends Error {
  constructor(public name: string, message: string) {
    super(message);
  }
}
