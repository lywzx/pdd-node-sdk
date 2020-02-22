export const PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE = 'PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE';

/**
 * 接口名称：商品送装服务模版删除
 * 接口标识：pdd.goods.logistics.ser.template.delete
 * 接口使用场景：商品送装服务模版删除
 **/

export interface PddGoodsLogisticsSerTemplateDeleteRequestInterface {
  /**
   * @description: 模版id
   * @type: string
   * @default:
   **/
  template_id?: string;
}

/**
 * 接口名称：商品送装服务模版删除
 * 接口标识：pdd.goods.logistics.ser.template.delete
 * 接口使用场景：商品送装服务模版删除
 **/

export interface PddGoodsLogisticsSerTemplateDeleteResponseInterface {
  /**
   * @description: response
   * @type: PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface
   * @default:
   *
   **/
  goods_logistics_ser_template_delete_response: PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/

export interface PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: {
    requestInterface: PddGoodsLogisticsSerTemplateDeleteRequestInterface;
    responseInterface: PddGoodsLogisticsSerTemplateDeleteResponseInterface;
  };
}
