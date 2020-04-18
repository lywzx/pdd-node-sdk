import debug, { Debugger } from 'debug';

/**
 * get pdd log client
 */
let pddLogClient: Debugger;
export function getPddLogClient() {
  if (!pddLogClient) {
    pddLogClient = debug('pdd:log');
  }
  return pddLogClient;
}

/**
 * pdd print logs
 * @param formatter
 * @param args
 */
export function pddLog(formatter: any, ...args: any[]) {
  const logClient = getPddLogClient();
  logClient(formatter, ...args);
}
