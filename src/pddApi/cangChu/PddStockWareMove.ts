export const PDD_STOCK_WARE_MOVE = 'PDD_STOCK_WARE_MOVE';

/**
 * 接口名称：家电分仓库存-库存信息调整
 * 接口标识：pdd.stock.ware.move
 * 接口使用场景：家电分仓库存-库存信息调整
 **/
export interface PddStockWareMoveRequestInterface {
  /**
   * @description:
   * @type: PddStockWareMoveStockMoveOrderActionDtoRequestInterface
   * @default:
   *
   **/
  stock_move_order_action_dto?: PddStockWareMoveStockMoveOrderActionDtoRequestInterface;

  /**
   * @description: List<JsonObject>的json string, 一次传入StockMoveRecordActionDTO list size不超过30个
   * @type: PddStockWareMoveStockMoveRecordActionDtoListRequestInterface[]
   * @default:
   *
   **/
  stock_move_record_action_dto_list?: PddStockWareMoveStockMoveRecordActionDtoListRequestInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddStockWareMoveStockMoveOrderActionDtoRequestInterface {
  /**
   * @description: 调整方向。1, "入库"；2, "出库"；3, "库存同步"
   * @type: number
   * @default:
   **/
  move_direction?: number;

  /**
   * @description: 调整单备注
   * @type: string
   * @default:
   **/
  order_note: string;

  /**
   * @description: 业务类型。1, "采购"；2, "调拨"；3, "退货"；4, "盘点"；5, "发货"；6, "库存同步"
   * @type: number
   * @default:
   **/
  business_type?: number;

  /**
   * @description: 仓库编码
   * @type: string
   * @default:
   **/
  warehouse_sn?: string;

  /**
   * @description: 调整时间
   * @type: string
   * @default:
   **/
  move_time?: string;

  /**
   * @description: 调整单号
   * @type: string
   * @default:
   **/
  move_order_sn?: string;
}

/**
 * @description List<JsonObject>的json string, 一次传入StockMoveRecordActionDTO list size不超过30个
 * @default
 * @example
 **/
export interface PddStockWareMoveStockMoveRecordActionDtoListRequestInterface {
  /**
   * @description: 备注
   * @type: string
   * @default:
   **/
  note: string;

  /**
   * @description: 调整数量
   * @type: string
   * @default:
   **/
  move_num?: string;

  /**
   * @description: 货品sn
   * @type: string
   * @default:
   **/
  ware_sn?: string;
}

/**
 * 接口名称：家电分仓库存-库存信息调整
 * 接口标识：pdd.stock.ware.move
 * 接口使用场景：家电分仓库存-库存信息调整
 **/
export interface PddStockWareMoveResponseInterface {
  /**
   * @description: 调整单ID
   * @type: string
   * @default:
   **/
  open_api_response: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_STOCK_WARE_MOVE]: {
    requestInterface: PddStockWareMoveRequestInterface;
    responseInterface: PddStockWareMoveResponseInterface;
  };
}
