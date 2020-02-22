export const PDD_AD_DELETE_BID = 'PDD_AD_DELETE_BID';

/**
 * 接口名称：推广单元取消定向（不可取消通投）
 * 接口标识：pdd.ad.delete.bid
 * 接口使用场景：推广类型，0-搜索推广，2-展示推广
 **/
export interface PddAdDeleteBidRequestInterface {
  /**
   * @description: 推广类型  2-展示推广
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 单元ID
   * @type: string
   * @default:
   **/
  unit_id?: string;

  /**
   * @description: 定向ID，不能删除全体人群定向。 List<Long>的json string。示例[111,222,333]
   * @type: string
   * @default:
   **/
  bid_ids?: string;
}

/**
 * 接口名称：推广单元取消定向（不可取消通投）
 * 接口标识：pdd.ad.delete.bid
 * 接口使用场景：推广类型，0-搜索推广，2-展示推广
 **/
export interface PddAdDeleteBidResponseInterface {
  /**
   * @description: 开平返回结果
   * @type: PddAdDeleteBidOpenApiResponseResponseInterface
   * @default:
   *
   **/
  open_api_response: PddAdDeleteBidOpenApiResponseResponseInterface;
}

/**
 * @description 开平返回结果
 * @default
 * @example
 **/
export interface PddAdDeleteBidOpenApiResponseResponseInterface {
  /**
   * @description: api是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_DELETE_BID]: {
    requestInterface: PddAdDeleteBidRequestInterface;
    responseInterface: PddAdDeleteBidResponseInterface;
  };
}
