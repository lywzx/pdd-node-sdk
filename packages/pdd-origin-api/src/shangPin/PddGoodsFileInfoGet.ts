export const PDD_GOODS_FILE_INFO_GET = 'pdd.goods.file.info.get';
export const PDD_GOODS_FILE_INFO_GET_RESPONSE_KEY = 'goods_file_info_response';

/**
 * 接口名称：文件详情查询
 * 接口标识：pdd.goods.file.info.get
 * 接口使用场景：文件详情查询
 **/
export interface PddGoodsFileInfoGetRequestInterface {
  /**
   * @description: url_list
   * @type: string[]
   * @default:
   **/
  url_list?: string[];
}

/**
 * 接口名称：文件详情查询
 * 接口标识：pdd.goods.file.info.get
 * 接口使用场景：文件详情查询
 **/
export interface PddGoodsFileInfoGetResponseInterface {
  /**
   * @description: goods_file_info_response
   * @type: PddGoodsFileInfoGetGoodsFileInfoResponseResponseInterface
   * @default:
   *
   **/
  goods_file_info_response: PddGoodsFileInfoGetGoodsFileInfoResponseResponseInterface;
}

/**
 * @description goods_file_info_response
 * @default
 * @example
 **/
export interface PddGoodsFileInfoGetGoodsFileInfoResponseResponseInterface {
  /**
   * @description: list
   * @type: PddGoodsFileInfoGetGoodsFileInfoResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsFileInfoGetGoodsFileInfoResponseListResponseInterface[];
}

/**
 * @description list
 * @default
 * @example
 **/
export interface PddGoodsFileInfoGetGoodsFileInfoResponseListResponseInterface {
  /**
   * @description: file_id
   * @type: string | number
   * @default:
   **/
  file_id: string | number;

  /**
   * @description: status
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: url
   * @type: string
   * @default:
   **/
  url: string;
}
