export interface PddClientOAuthOptionsInterface {
  // 返回回调时的state值
  state?: string | number;

  // 重定向时，页面地址
  redirectUri: string | number;
}
