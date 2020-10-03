/**
 * 包内使用，拼多多api调用时，传递AccessToken完整信息时，使用此项
 */
export const PDD_CLIENT_PASS_ACCESS_TOKEN_KEY = '__pdd_client__pass_access_token__';

/**
 * 如果access token还在2分钟之内有效期，并且需要刷新access token，则直接清理掉
 */
export const PDD_CLIENT_ACCESS_TOKEN_CLEAR_TIMEOUT = 120000;
