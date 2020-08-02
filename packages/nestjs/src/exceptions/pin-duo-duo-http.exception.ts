import { HttpException, HttpStatus } from '@nestjs/common';
import { PddErrorResponse } from '@pin-duo-duo/core';

export class PinDuoDuoHttpException extends HttpException {
  constructor(response: PddErrorResponse, status = HttpStatus.SERVICE_UNAVAILABLE) {
    super(JSON.stringify(HttpException.createBody(JSON.stringify(response), 'SERVICE_UNAVAILABLE', status)), status);
  }
}
