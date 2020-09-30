import { PddRequestParamsMissingException } from '../exceptions';

/**
 * check params is required
 * @param params
 * @param keys
 */
export function checkRequired(
  params: Record<string, unknown>,
  keys: string | string[]
): void | PddRequestParamsMissingException {
  if (!Array.isArray(keys)) {
    keys = [keys];
  }
  for (let i = 0, l = keys.length; i < l; i++) {
    const k = keys[i];
    if (!params.hasOwnProperty(k)) {
      return new PddRequestParamsMissingException('ParameterMissingError', '`' + k + '` required');
    }
  }
}
