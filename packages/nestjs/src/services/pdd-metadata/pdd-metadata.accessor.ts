import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PddMetadataAccessor {
  constructor(private readonly reflector: Reflector) {}
}
