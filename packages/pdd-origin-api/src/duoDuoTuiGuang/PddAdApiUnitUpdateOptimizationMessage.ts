export const PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE = 'pdd.ad.api.unit.update.optimization.message';

export const PDD_AD_API_UNIT_UPDATE_OPTIMIZATION_MESSAGE_LIMITERS = [
  {
    limiterLevel: 1,
    timeRange: 10,
    times: 20,
    callSourceType: 0,
  },
];

/**
 * 接口名称：更新优化信息
 * 接口标识：pdd.ad.api.unit.update.optimization.message
 * 接口使用场景：更新优化信息
 **/
export interface PddAdApiUnitUpdateOptimizationMessageRequestInterface {
  /**
   * @description: 广告单元Id
   * @type: string | number
   * @default:
   **/
  adId: string | number;

  /**
   * @description: 优化信息
   * @type: PddAdApiUnitUpdateOptimizationMessageOptimizationMessageRequestInterface
   * @default:
   *
   **/
  optimizationMessage: PddAdApiUnitUpdateOptimizationMessageOptimizationMessageRequestInterface;
}

/**
 * @description 优化信息
 * @default
 * @example
 **/
export interface PddAdApiUnitUpdateOptimizationMessageOptimizationMessageRequestInterface {
  /**
   * @description: 数据积累期出价。当使用OCPX时对该字段赋值。
   * @type: string | number
   * @default:
   **/
  accumulationBid?: string | number;

  /**
   * @description: 智能投放期出价。当使用OCPX时对该字段赋值。
   * @type: string | number
   * @default:
   **/
  optimizationBid?: string | number;

  /**
   * @description: 优化目标。0表示不优化。1表示优化ROI，2表示优化转化成本。当计划使用智能推广时，该值必须传1；当单元使用自动调价功能(ECPC)时，该值必须传1；当单元使用OCPC功能时，该值必须传2。
   * @type: number
   * @default:
   **/
  optimizationGoal: number;

  /**
   * @description: 优化方式。0表示不优化，1表示ECPC，2表示OCPC。当计划使用智能推广时，该值必须传0；当单元使用ECPC时，该值必须传1；当使用OCPC时，该值必须传2。
   * @type: number
   * @default:
   **/
  optimizationMethod?: number;

  /**
   * @description: 可选优化出价列表。当使用OCPX时对该字段赋值。
   * @type: PddAdApiUnitUpdateOptimizationMessageOptimizationMessageOptionalOptimizationBidMessageListRequestInterface[]
   * @default:
   *
   **/
  optionalOptimizationBidMessageList?: PddAdApiUnitUpdateOptimizationMessageOptimizationMessageOptionalOptimizationBidMessageListRequestInterface[];
}

/**
 * @description 可选优化出价列表。当使用OCPX时对该字段赋值。
 * @default
 * @example
 **/
export interface PddAdApiUnitUpdateOptimizationMessageOptimizationMessageOptionalOptimizationBidMessageListRequestInterface {
  /**
   * @description: 可选优化出价价格
   * @type: string | number
   * @default:
   **/
  optimizationBid: string | number;

  /**
   * @description: 可选优化出价目标。3表示优化店铺关注，4表示优化商品收藏，5表示优化询单
   * @type: number
   * @default:
   **/
  optimizationGoal: number;
}

/**
 * 接口名称：更新优化信息
 * 接口标识：pdd.ad.api.unit.update.optimization.message
 * 接口使用场景：更新优化信息
 **/
export interface PddAdApiUnitUpdateOptimizationMessageResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitUpdateOptimizationMessageResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitUpdateOptimizationMessageResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitUpdateOptimizationMessageResponseResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  errorCode: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  errorMsg: string;

  /**
   * @description: 是否更新成功
   * @type: boolean
   * @default:
   **/
  result: boolean;

  /**
   * @description:
   * @type: boolean
   * @default:
   **/
  success: boolean;
}
