export const PDD_LOGISTICS_CO_TRACK_SUB = 'pdd.logistics.co.track.sub';

/**
 * 接口名称：轨迹订阅接口
 * 接口标识：pdd.logistics.co.track.sub
 * 接口使用场景：拼多多向物流公司订阅指定运单号的物流轨迹详情
 **/
export interface PddLogisticsCoTrackSubRequestInterface {
  /**
   * @description: 快递公司伙伴ID
   * @type: string
   * @default:
   **/
  ship_id?: string;

  /**
   * @description: 消息体
   * @type: string
   * @default:
   **/
  data?: string;
}

/**
 * 接口名称：轨迹订阅接口
 * 接口标识：pdd.logistics.co.track.sub
 * 接口使用场景：拼多多向物流公司订阅指定运单号的物流轨迹详情
 **/
export interface PddLogisticsCoTrackSubResponseInterface {
  /**
   * @description: 快递公司伙伴ID
   * @type: string
   * @default:
   **/
  ship_id: string;

  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  success: boolean;

  /**
   * @description: 返回码
   * @type: string
   * @default:
   **/
  reason_code: string;
}
