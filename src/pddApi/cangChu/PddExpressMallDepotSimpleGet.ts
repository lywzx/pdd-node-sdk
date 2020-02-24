export const PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET = 'pdd.express.mall.depot.simple.get';
export const PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY = 'open_api_response';

/**
 * 接口名称：商家全部仓库的简要信息列表
 * 接口标识：pdd.express.mall.depot.simple.get
 * 接口使用场景：商家全部仓库的简要信息列表(无业务入参)
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddExpressMallDepotSimpleGetRequestInterface {}

/**
 * 接口名称：商家全部仓库的简要信息列表
 * 接口标识：pdd.express.mall.depot.simple.get
 * 接口使用场景：商家全部仓库的简要信息列表(无业务入参)
 **/
export interface PddExpressMallDepotSimpleGetResponseInterface {
  /**
   * @description: response
   * @type: PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface[]
   * @default:
   *
   **/
  open_api_response: PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface[];
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface {
  /**
   * @description: 仓库Id
   * @type: string
   * @default:
   **/
  depot_id: string;

  /**
   * @description: 仓库id的string表示
   * @type: string
   * @default:
   **/
  depot_str: string;

  /**
   * @description: 仓库名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 仓库类型(暂时1表示自建仓)
   * @type: number
   * @default:
   **/
  depot_type: number;
}
