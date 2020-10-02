/**
 * 拼多多服务器出错时，接收到的错误信息
 */
export type PddClientErrorListener<T extends Record<string, any>> = (error: Error, params: T) => void;
