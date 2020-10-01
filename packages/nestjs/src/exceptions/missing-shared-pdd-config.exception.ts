/**
 * 缺少参数时的错误信息
 */
export class MissingSharedPddConfigException extends Error {
  constructor(configKey: string, clientName: string) {
    super(`Configuration "${configKey}" referenced from the "PddNest(${clientName})" options does not exist.`);
  }
}
