export const PDD_AD_API_UNIT_CREATIVE_CHECK_TITLE = 'pdd.ad.api.unit.creative.check.title';

/**
 * 接口名称：检查创意标题是否合法
 * 接口标识：pdd.ad.api.unit.creative.check.title
 * 接口使用场景：检查创意标题是否合法
 **/
export interface PddAdApiUnitCreativeCheckTitleRequestInterface {
  /**
   * @description: 商品Id
   * @type: string | number
   * @default:
   **/
  goodsId: string | number;

  /**
   * @description: 创意标题
   * @type: string
   * @default:
   **/
  title: string;
}

/**
 * 接口名称：检查创意标题是否合法
 * 接口标识：pdd.ad.api.unit.creative.check.title
 * 接口使用场景：检查创意标题是否合法
 **/
export interface PddAdApiUnitCreativeCheckTitleResponseInterface {
  /**
   * @description:
   * @type: PddAdApiUnitCreativeCheckTitleResponseResponseInterface
   * @default:
   *
   **/
  response: PddAdApiUnitCreativeCheckTitleResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddAdApiUnitCreativeCheckTitleResponseResponseInterface {
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
   * @description: 是否合法
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
