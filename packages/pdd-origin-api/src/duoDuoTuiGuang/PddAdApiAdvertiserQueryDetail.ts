export const PDD_AD_API_ADVERTISER_QUERY_DETAIL = 'pdd.ad.api.advertiser.query.detail';

export const PDD_AD_API_ADVERTISER_QUERY_DETAIL_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：查询广告主详情信息
 * 接口标识：pdd.ad.api.advertiser.query.detail
 * 接口使用场景：查询广告主详情信息
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddAdApiAdvertiserQueryDetailRequestInterface {}

/**
 * 接口名称：查询广告主详情信息
 * 接口标识：pdd.ad.api.advertiser.query.detail
 * 接口使用场景：查询广告主详情信息
 **/
export interface PddAdApiAdvertiserQueryDetailResponseInterface {
  /**
   * @description:
   * @type: PddAdApiAdvertiserQueryDetailResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiAdvertiserQueryDetailResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryDetailResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  error_code: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  error_msg: string;

  /**
   * @description:
   * @type: PddAdApiAdvertiserQueryDetailResponseResultResponseInterface
   * @default:
   *
   **/
  result: PddAdApiAdvertiserQueryDetailResponseResultResponseInterface;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryDetailResponseResultResponseInterface {
  /**
   * @description: 广告主审核状态。1表示审核通过，2表示待审核，3表示审核拒绝，4表示复审拒绝。
   * @type: number
   * @default:
   **/
  advertiser_audit_status: number;

  /**
   * @description: 惩罚信息
   * @type: PddAdApiAdvertiserQueryDetailResponseResultAdvertiserPunishDetailResponseInterface
   * @default:
   *
   **/
  advertiser_punish_detail: PddAdApiAdvertiserQueryDetailResponseResultAdvertiserPunishDetailResponseInterface;

  /**
   * @description: 广告主审核原因
   * @type: number
   * @default:
   **/
  audit_reason: number;

  /**
   * @description:
   * @type: string | number
   * @default:
   **/
  mall_Id: string | number;
}

/**
 * @description 惩罚信息
 * @default
 * @example
 **/
export interface PddAdApiAdvertiserQueryDetailResponseResultAdvertiserPunishDetailResponseInterface {
  /**
   * @description: 惩罚原因
   * @type: string
   * @default:
   **/
  punish_reason: string;

  /**
   * @description: 惩罚状态。1表示正常，2表示惩罚中。
   * @type: number
   * @default:
   **/
  punish_status: number;
}
