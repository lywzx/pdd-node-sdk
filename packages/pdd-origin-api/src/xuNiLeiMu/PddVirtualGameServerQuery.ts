export const PDD_VIRTUAL_GAME_SERVER_QUERY = 'pdd.virtual.game.server.query';
export const PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY = 'game_server_query_response';

/**
 * 接口名称：虚拟游戏类区服列表接口
 * 接口标识：pdd.virtual.game.server.query
 * 接口使用场景：虚拟游戏类区服列表
 **/
export interface PddVirtualGameServerQueryRequestInterface {
  /**
   * @description: 游戏CODE
   * @type: string
   * @default:
   **/
  goods_config_code: string;
}

/**
 * 接口名称：虚拟游戏类区服列表接口
 * 接口标识：pdd.virtual.game.server.query
 * 接口使用场景：虚拟游戏类区服列表
 **/
export interface PddVirtualGameServerQueryResponseInterface {
  /**
   * @description: response
   * @type: PddVirtualGameServerQueryGameServerQueryResponseResponseInterface
   * @default:
   *
   **/
  game_server_query_response: PddVirtualGameServerQueryGameServerQueryResponseResponseInterface;
}

/**
 * @description response
 * @default
 * @example
 **/
export interface PddVirtualGameServerQueryGameServerQueryResponseResponseInterface {
  /**
   * @description: 游戏CODE
   * @type: string
   * @default:
   **/
  goods_config_code: string;

  /**
   * @description: 游戏ID
   * @type: string | number
   * @default:
   **/
  goods_config_id: string | number;

  /**
   * @description: 游戏配置名称
   * @type: string
   * @default:
   **/
  goods_config_name: string;

  /**
   * @description: 区服信息
   * @type: PddVirtualGameServerQueryGameServerQueryResponseItemListResponseInterface[]
   * @default:
   *
   **/
  item_list: PddVirtualGameServerQueryGameServerQueryResponseItemListResponseInterface[];
}

/**
 * @description 区服信息
 * @default
 * @example
 **/
export interface PddVirtualGameServerQueryGameServerQueryResponseItemListResponseInterface {
  /**
   * @description: 下级区服信息
   * @type: PddVirtualGameServerQueryGameServerQueryResponseItemListChildrenResponseInterface[]
   * @default:
   *
   **/
  children: PddVirtualGameServerQueryGameServerQueryResponseItemListChildrenResponseInterface[];

  /**
   * @description: 区服ID
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 类型 1-区 2-服
   * @type: number
   * @default:
   **/
  type: number;
}

/**
 * @description 下级区服信息
 * @default
 * @example
 **/
export interface PddVirtualGameServerQueryGameServerQueryResponseItemListChildrenResponseInterface {
  /**
   * @description: 区服ID
   * @type: string | number
   * @default:
   **/
  id: string | number;

  /**
   * @description: 名称
   * @type: string
   * @default:
   **/
  name: string;

  /**
   * @description: 类型 1-区 2-服
   * @type: number
   * @default:
   **/
  type: number;
}
