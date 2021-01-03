export const PDD_SERVICEMARKET_CONTRACT_SEARCH = 'pdd.servicemarket.contract.search';
export const PDD_SERVICEMARKET_CONTRACT_SEARCH_RESPONSE_KEY = 'servicemarket_contract_search_response';

/**
 * 接口名称：服务市场订单履约查询
 * 接口标识：pdd.servicemarket.contract.search
 * 接口使用场景：用于查询指定商家在服务市场订单执行履约的排序
 **/
export interface PddServicemarketContractSearchRequestInterface {
  /**
   * @description: 买家店铺id
   * @type: string | number
   * @default:
   **/
  mallId: string | number;
}

/**
 * 接口名称：服务市场订单履约查询
 * 接口标识：pdd.servicemarket.contract.search
 * 接口使用场景：用于查询指定商家在服务市场订单执行履约的排序
 **/
export interface PddServicemarketContractSearchResponseInterface {
  /**
   * @description: response
   * @type: PddServicemarketContractSearchServicemarketContractSearchResponseResponseInterface
   * @default:
   *
   **/
  servicemarket_contract_search_response: PddServicemarketContractSearchServicemarketContractSearchResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddServicemarketContractSearchServicemarketContractSearchResponseResponseInterface {
  /**
   * @description: 授权结束时间
   * @type: string | number
   * @default:
   **/
  endAt: string | number;

  /**
   * @description: 订单号列表
   * @type: string[]
   * @default:
   **/
  orderSns: string[];

  /**
   * @description:
   * @type: PddServicemarketContractSearchServicemarketContractSearchResponseSpecValueResponseInterface
   * @default:
   *
   **/
  specValue: PddServicemarketContractSearchServicemarketContractSearchResponseSpecValueResponseInterface;

  /**
   * @description: 授权开始时间
   * @type: string | number
   * @default:
   **/
  startAt: string | number;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddServicemarketContractSearchServicemarketContractSearchResponseSpecValueResponseInterface {
  /**
   * @description:
   * @type: PddServicemarketContractSearchServicemarketContractSearchResponseSpecValueSpecValueListResponseInterface[]
   * @default:
   *
   **/
  specValueList: PddServicemarketContractSearchServicemarketContractSearchResponseSpecValueSpecValueListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddServicemarketContractSearchServicemarketContractSearchResponseSpecValueSpecValueListResponseInterface {
  /**
   * @description: 规格值id
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 规格名称
   * @type: string
   * @default:
   **/
  specName: string;

  /**
   * @description: 规格值名称
   * @type: string
   * @default:
   **/
  specValue: string;

  /**
   * @description: 规格时长参数
   * @type: string | number
   * @default:
   **/
  timeLengthValue: string | number;
}
