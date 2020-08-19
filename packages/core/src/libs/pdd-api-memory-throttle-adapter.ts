import { ILock } from '../interfaces';
import { PddApiThrottleAdapter } from './pdd-api-throttle-adapter';

type cachedType = { triggerTotal: number; timeoutAt: number };
/**
 * 拼多多默认的不限频类
 */
export class PddApiMemoryThrottleAdapter extends PddApiThrottleAdapter {
  /**
   * 内部缓存数据内容
   * @protected
   */
  protected memoryCached = new Map<string, cachedType>();

  /**
   * 待清空列表
   * @protected
   */
  protected clearList = new Set<string>();

  /**
   * 清除数据的定时器
   * @protected
   */
  protected timer: any = null;

  /**
   * 默认内存限频率器
   * @param key
   * @param ttl
   */
  public lock(key: string, ttl = 1000): Promise<ILock> {
    let saved: cachedType = {
      triggerTotal: 0,
      timeoutAt: Date.now() + ttl,
    };
    let timeout;
    if (this.memoryCached.has(key)) {
      const readFromCached = this.memoryCached.get(key) as cachedType;
      timeout = readFromCached.timeoutAt - Date.now();
      if (timeout >= 0) {
        saved = readFromCached;
        saved.triggerTotal += 1;
      }
    }

    this.memoryCached.set(key, saved);

    clearTimeout(this.timer);
    setTimeout(this.clean, timeout || ttl);
    return Promise.resolve({
      triggerTotal: saved.triggerTotal,
      timeout: timeout || ttl,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  unLock(key: string): Promise<boolean> {
    if (this.memoryCached.has(key)) {
      const saved = this.memoryCached.get(key) as cachedType;
      saved.triggerTotal--;
      this.memoryCached.set(key, saved);
    }
    return Promise.resolve(true);
  }

  /**
   * 清空数据列表
   */
  protected clean = () => {
    for (const value of this.clearList.values()) {
      this.memoryCached.delete(value);
    }
    this.clearList.clear();
  };
}
