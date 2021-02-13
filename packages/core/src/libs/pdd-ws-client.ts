import { md5Base64 } from '../util';
import WebSocket from 'ws';
import { IPddWsTimeMetrics } from '../interfaces/pdd-ws-time-metrics.interface';

/**
 * 拼多多消息通知服务
 */
export class PddWsClient {
  static HEARTBEAT_DEFAULT_INTERVAL_MILLIS = 10 * 1000;

  static HEARTBEAT_DEFAULT_TIMEOUT_MILLIS = 3 * 60 * 1000;

  static RETRY_MAX = 10;

  /**
   * pdd websocket client
   */
  protected client: WebSocket | undefined;

  constructor(
    protected clientId: string,
    protected clientSecret: string,
    protected isInDuoDuoYun: boolean = false,
    protected wsAddress = 'wss://message-api.pinduoduo.com'
  ) {}

  protected getConnectUrl() {
    const n = Date.now();
    return `${this.wsAddress}/message/${this.clientId}/${n}/${md5Base64(`${this.clientId}${n}${this.clientSecret}`)}`;
  }

  protected init() {
    this.client = new WebSocket(this.getConnectUrl(), {});
  }

  protected getTimeMetrics(): IPddWsTimeMetrics {
    return {
      count: 0,
      max: 0,
      mean: 0,
      meanRate: 0,
      median: 0,
      min: 0,
      oneMinuteRate: 0,
      thPercentile75: 0,
      thPercentile95: 0,
      thPercentile99: 0,
    };
  }
}
