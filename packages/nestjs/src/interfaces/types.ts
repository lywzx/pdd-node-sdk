import { PddClient } from '@pin-duo-duo/core';

/**
 * pdd客户端集合
 */
export type PddClientCollect<T = any> = Record<string, PddClient<T>>;
