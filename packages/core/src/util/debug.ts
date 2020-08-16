import { Debugger } from 'debug';
import { isDevModel } from './dev';

/**
 * get pdd log client
 */
let pddLogClient: Debugger | null;
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
export function pddLog(formatter: any, color?: string, ...args: any[]) {
  const logClient = getPddLogClient();
  if (logClient) {
    const lastColor = logClient.color;
    if (color) {
      logClient.color = color.toString();
    }
    logClient.log(formatter, ...args);
    logClient.color = lastColor;
  }
}
