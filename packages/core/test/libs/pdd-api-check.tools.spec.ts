import { PDD_CHAT_PROMISE_INFO_GET, PDD_GOODS_CATS_GET } from '@pin-duo-duo/pdd-origin-api';
import { expect } from 'chai';
import { checkTypeIsNeedAccessToken, getTypeApiLimiter } from '../../src/libs';

describe('pdd api check tools test util', function () {
  it('#checkTypeIsNeedAccessToken should return true when type need access token', function () {
    expect(checkTypeIsNeedAccessToken(PDD_CHAT_PROMISE_INFO_GET)).to.be.eq(true);
  });

  it('#checkTypeIsNeedAccessToken should return false when type don"t need access token', function () {
    expect(checkTypeIsNeedAccessToken(PDD_GOODS_CATS_GET)).to.be.eq(false);
  });

  it('#getTypeApiLimiter should return void when not exists', function () {
    expect(getTypeApiLimiter('not-exists')).to.be.eq(undefined);
  });

  it('#getTypeApiLimiter should return array', function () {
    expect(getTypeApiLimiter(PDD_GOODS_CATS_GET)).to.length(2);
  });
});
