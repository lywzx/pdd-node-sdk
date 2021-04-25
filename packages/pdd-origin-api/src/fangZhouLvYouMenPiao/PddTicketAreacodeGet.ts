export const PDD_TICKET_AREACODE_GET = 'pdd.ticket.areacode.get';

/**
 * 接口名称：旅游门票区域编码查询
 * 接口标识：pdd.ticket.areacode.get
 * 接口使用场景：供应商获取pdd的区域编码
 **/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PddTicketAreacodeGetRequestInterface {}

/**
 * 接口名称：旅游门票区域编码查询
 * 接口标识：pdd.ticket.areacode.get
 * 接口使用场景：供应商获取pdd的区域编码
 **/
export interface PddTicketAreacodeGetResponseInterface {
  /**
   * @description:
   * @type: PddTicketAreacodeGetResponseResponseInterface
   * @default:
   *
   **/
  response: PddTicketAreacodeGetResponseResponseInterface;
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketAreacodeGetResponseResponseInterface {
  /**
   * @description:
   * @type: PddTicketAreacodeGetResponseAreaListResponseInterface[]
   * @default:
   *
   **/
  area_list: PddTicketAreacodeGetResponseAreaListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddTicketAreacodeGetResponseAreaListResponseInterface {
  /**
   * @description:
   * @type: number
   * @default:
   **/
  code: number;

  /**
   * @description:
   * @type: number
   * @default:
   **/
  level: number;

  /**
   * @description:
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description:
   * @type: number
   * @default:
   **/
  parent_code: number;
}
