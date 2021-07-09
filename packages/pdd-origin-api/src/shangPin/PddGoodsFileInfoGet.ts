export const PDD_GOODS_FILE_INFO_GET = 'pdd.goods.file.info.get';
export const PDD_GOODS_FILE_INFO_GET_RESPONSE_KEY = 'goods_file_info_response';

/**
 * 接口名称：文件详情查询
 * 接口标识：pdd.goods.file.info.get
 * 接口使用场景：文件详情查询
 **/
export interface PddGoodsFileInfoGetRequestInterface {
  /**
   * @description: url列表
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
   * @description:
   * @type: PddGoodsFileInfoGetGoodsFileInfoResponseListResponseInterface[]
   * @default:
   *
   **/
  list: PddGoodsFileInfoGetGoodsFileInfoResponseListResponseInterface[];
}

/**
 * @description
 * @default
 * @example
 **/
export interface PddGoodsFileInfoGetGoodsFileInfoResponseListResponseInterface {
  /**
   * @description: 文件id
   * @type: string | number
   * @default:
   **/
  file_id: string | number;

  /**
   * @description: 文件状态(-2:上传失败,-1:转码失败,0:转码中,1:审核中,2:审核通过,3:审核驳回)
   * @type: number
   * @default:
   **/
  status: number;

  /**
   * @description: 文件链接
   * @type: string
   * @default:
   **/
  url: string;
}
