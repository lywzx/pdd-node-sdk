import { HttpException, HttpStatus } from '@nestjs/common';
import { PddResponseException } from '@pin-duo-duo/core';

export class PinDuoDuoHttpException extends HttpException {
  constructor(response: PddResponseException, status = HttpStatus.SERVICE_UNAVAILABLE) {
    super(JSON.stringify(HttpException.createBody(JSON.stringify(response), 'SERVICE_UNAVAILABLE', status)), status);
  }
}
