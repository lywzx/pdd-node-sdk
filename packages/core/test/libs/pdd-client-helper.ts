import { fake, replace, SinonStub, stub } from 'sinon';
import { PddClient } from '../../src';
import * as devUtil from '../../src/util/dev';
import * as checkTools from '../../src/libs/pdd-api-check.tools';
import * as debug from '../../src/util/debug';

/**
 * 替换client当中requestWithRetry方法
 * @param client
 * @param value
 */
export function replaceRequestWithRetry(client: PddClient<any>, value: any) {
  const mkRequestWithRetryMethod = stub().resolves(value);
  replace(client, 'requestWithRetry', mkRequestWithRetryMethod);
  return mkRequestWithRetryMethod;
}

/**
 * 替换拼多多request方法
 * @param client
 * @param value
 */
export function replacePddClientRequest(client: PddClient<any>, value: any | SinonStub<any, any>) {
  let stubs;
  if ('callCount' in value) {
    stubs = value;
  } else {
    stubs = stub().resolves(value);
  }
  replace(client, 'request', stubs);
  return stubs;
}

/**
 * 替换是否打开了调试模式
 * @param status
 */
export function replaceDevMode(status = true) {
  const devModeMock = stub().returns(status);
  replace(devUtil, 'isDevModel', devModeMock);
  return devModeMock;
}

/**
 * 更新当前是否打开需要access token
 * @param result
 */
export function replaceCheckTypeIsNeedAccessToken(result = true) {
  const devModeMock = stub().returns(result);
  replace(checkTools, 'checkTypeIsNeedAccessToken', devModeMock);
  return devModeMock;
}

/**
 * 替换获取pdd client log
 * @param value
 */
export function replaceGetPddLogClient(value: any = { enabled: true, color: '' }) {
  let stu;
  if ('callCount' in value) {
    stu = value;
  } else {
    stu = fake.returns(value);
  }
  replace(debug, 'getPddLogClient', stu);
  return stu;
}

/**
 * 替换pddLog方法
 */
export function replacePddLog() {
  const fkLog = fake.returns(null);
  replace(debug, 'pddLog', fkLog);
  return fkLog;
}
