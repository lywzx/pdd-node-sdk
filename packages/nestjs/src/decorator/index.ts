import { SetMetadata } from '@nestjs/common';
import { NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT } from '../constant';
import { PDD_CLIENT_BIND_EVENTS_TOKEN } from '../constant/constant-decorator';

/**
 * 客户端名称
 * @param clientName
 */
export function catchError(
  clientName: string | string[] = NEST_PDD_MODULE_PDD_CLIENTS_DEFAULT
): MethodDecorator | PropertyDecorator {
  return SetMetadata(PDD_CLIENT_BIND_EVENTS_TOKEN, clientName);
}
