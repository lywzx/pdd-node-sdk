import { Debugger } from 'debug';
import { isDevModel } from './dev';

/**
 * get pdd log client
 */
let pddLogClient: Debugger | null;
/* istanbul ignore next */
export function getPddLogClient() {
  if (typeof pddLogClient === 'undefined') {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const debug = require('debug');
      pddLogClient = debug('pdd:log');
    } catch (e) {
      if (isDevModel()) {
        console.log('can not find debug package, please run "npm run debug --save or yarn add debug"');
      }
      pddLogClient = null;
    }
  }
  return pddLogClient;
}

/**
 * pdd print logs
 * @param formatter
 * @param color
 * @param args
 */
/* istanbul ignore next */
export function pddLog(formatter: any, ...args: any[]) {
  const logClient = getPddLogClient();
  if (logClient) {
    logClient(formatter, ...args);
  }
}
