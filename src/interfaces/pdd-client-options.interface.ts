export interface PddClientOptionsInterface {
  // 拼多多应用client_id
  clientId: string;

  // 拼多多应用密钥
  clientSecret: string;

  // 选传，默认http://gw-api.pinduoduo.com/api/router
  endpoint?: string;
}
