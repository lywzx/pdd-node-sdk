import template from 'lodash/template';

// 处理成OAuth的Type类型
export enum OAuthType {
  // 商家
  mms = 'mms',
  // 移动
  mai = 'mai',
  // 多多
  jinbao = 'jinbao',
}

// 拼多多默认认证地址
export const PDD_OAUTH_TEMPLATE = {
  [OAuthType.mms]: template(
    'https://fuwu.pinduoduo.com/service-market/auth?response_type=code&client_id=<%= clientId %>&redirect_uri=<%= redirectUri %>&state=<%= state %>&view=web'
  ),
  [OAuthType.mai]: template(
    'https://mai.pinduoduo.com/h5-login.html?response_type=code&client_id=<%= clientId %>&redirect_uri=<%= redirectUri %>&state=<%= state %>&view=h5'
  ),
  [OAuthType.jinbao]: template(
    'https://jinbao.pinduoduo.com/open.html?client_id=<%= clientId %>&response_type=code&redirect_uri=<%= redirectUri %>&state=<%= state %>'
  ),
};

// 拼多多默认网关地址
export const PDD_END_POINTS = 'https://gw-api.pinduoduo.com/api/router';

// 拼多多OAuth认证时，换取token信息
export const PDD_OAUTH_TOKEN_URL = 'https://open-api.pinduoduo.com/oauth/token';

// 相关类型
export * from './enum';
export * from './ws';
