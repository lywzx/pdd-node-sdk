export const PDD_TICKET_SCENIC_GET = 'pdd.ticket.scenic.get';

/**
 * 接口名称：旅游门票拼多多景区编码查询
 * 接口标识：pdd.ticket.scenic.get
 * 接口使用场景：isv查询pdd景区
 **/
export interface PddTicketScenicGetRequestInterface {
  /**
   * @description: 城市编码
   * @type: string | number
   * @default:
   **/
  city_code?: string | number;

  /**
   * @description: 定位类型 1.百度 2.google
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 拼多多景区 ID
   * @type: string | number
   * @default:
   **/
  scenic_id?: string | number;

  /**
   * @description: 景区简称（至少两个字）
   * @type: string
   * @default:
   **/
  scenic_name: string;
}

/**
 * 接口名称：旅游门票拼多多景区编码查询
 * 接口标识：pdd.ticket.scenic.get
 * 接口使用场景：isv查询pdd景区
 **/
export interface PddTicketScenicGetResponseInterface {
  /**
   * @description:
   * @type: PddTicketScenicGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddTicketScenicGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketScenicGetResponseResponseInterface {
  /**
   * @description:
   * @type: PddTicketScenicGetResponseAreaListResponseInterface[]
   * @default:
   *
   **/
  area_list: PddTicketScenicGetResponseAreaListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketScenicGetResponseAreaListResponseInterface {
  /**
   * @description: 纬度
   * @type: string
   * @default:
   **/
  latitude: string;

  /**
   * @description: 定位类型 1.百度 2.google
   * @type: number
   * @default:
   **/
  location_type: number;

  /**
   * @description: 经度
   * @type: string
   * @default:
   **/
  longitude: string;

  /**
   * @description: 拼多多景区编码
   * @type: string | number
   * @default:
   **/
  scenic_id: string | number;

  /**
   * @description: 拼多多景区名称
   * @type: string
   * @default:
   **/
  scenic_name: string;
}
