import { defaultRetryOptions } from '../../src';
import {
  guessPddClientCachedParams,
  guessPddClientExecuteParams,
  guessPddClientGenerateParams,
  guessPddClientRequestWithRetryParams,
} from '../../src/util/guess-params.util';
import { expect } from 'chai';
import { stub } from 'sinon';

describe('guess params test util', function () {
  const callback = (err: any, result: any) => 1;

  describe('#guessPddClientExecuteParams', function () {
    it('when callback, before args will be undefined', function () {
      const result = [undefined, undefined, undefined, callback];
      expect(guessPddClientExecuteParams([undefined, undefined, undefined, callback])).to.be.eqls(result);
      expect(guessPddClientExecuteParams([undefined, undefined, callback, 1, callback])).to.be.eqls(result);
      expect(guessPddClientExecuteParams([undefined, callback, 1, 1])).to.be.eqls(result);
      expect(guessPddClientExecuteParams([callback, 1, 1, 1])).to.be.eqls(result);
    });

    it('guess access options', function () {
      const opts = { a: 1 };
      expect(guessPddClientExecuteParams([opts, undefined, undefined, undefined])).to.be.eqls([
        opts,
        undefined,
        undefined,
        undefined,
      ]);
    });

    it('guess access options to retryOptions', function () {
      expect(guessPddClientExecuteParams([2, undefined, undefined, undefined])).to.be.eqls([
        undefined,
        2,
        undefined,
        undefined,
      ]);
    });

    it('retry and cache options guess', function () {
      expect(guessPddClientExecuteParams([3, 2, undefined, undefined])).to.be.eqls([undefined, 3, 2, undefined]);
      expect(guessPddClientExecuteParams([{}, 2, 3, undefined])).to.be.eqls([{}, 2, 3, undefined]);
    });
  });

  describe('#guessPddClientRequestWithRetryParams', function () {
    it('only pass callback sense', function () {
      const defaultResult = [defaultRetryOptions, undefined, callback];
      expect(guessPddClientRequestWithRetryParams(callback, undefined)).to.be.eqls(defaultResult);
      expect(guessPddClientRequestWithRetryParams(undefined, callback)).to.be.eqls(defaultResult);
      expect(guessPddClientRequestWithRetryParams({}, callback)).to.be.eqls(defaultResult);
    });

    it('get axios options', function () {
      const axiosOptions: any[] = [
        {
          timeout: 20,
        },
        {
          proxy: {},
        },
        {
          timeout: 20,
          proxy: {},
        },
      ];
      for (const option of axiosOptions) {
        expect(guessPddClientRequestWithRetryParams(option, undefined)).to.be.eqls([
          defaultRetryOptions,
          option,
          undefined,
        ]);
      }
    });

    it('should be undefined when pass null', function () {
      expect(guessPddClientRequestWithRetryParams(null, undefined)).to.be.eqls([undefined, undefined, undefined]);
    });
  });

  describe('#guessPddClientCachedParams', function () {
    it('should use default ttl', function () {
      const arr: Array<[any, number]> = [
        [undefined, 1],
        [true, 1],
        [
          {
            cacheKey: '1',
          },
          1,
        ],
        [
          {
            cacheKey: '1',
            ttl: 1,
          },
          2,
        ],
      ];
      for (const [index, item] of arr.entries()) {
        const clbk = stub().returns('1');
        const result = guessPddClientCachedParams(item[0], item[1], clbk);
        expect(result).to.be.eqls(['1', 1]);
        if (index >= 2) {
          expect(clbk.callCount).to.be.eq(0);
        } else {
          expect(clbk.callCount).to.be.eq(1);
        }
      }
    });

    it('should use options as ttl', function () {
      expect(guessPddClientCachedParams(2, 1, () => 'key')).to.be.eqls(['key', 2]);
    });

    it('should ignore cache key when ttl blew 0, or cacheOptions false', function () {
      expect(guessPddClientCachedParams(-1, 1, () => 'key')).to.be.eqls([undefined, -1]);
      expect(guessPddClientCachedParams(false, 1, () => 'key')).to.be.eqls([undefined, 1]);
    });
  });

  describe('#guessPddClientGenerateParams', function () {
    it('when code is string, will be transformer to object', function () {
      expect(guessPddClientGenerateParams('code')).to.be.eql([{ code: 'code' }, undefined, undefined]);
    });

    it('will guess param is correct', function () {
      const params = [
        {
          code: 'code',
        },
        {
          refresh_token: 'code',
        },
      ];

      for (const param of params) {
        expect(guessPddClientGenerateParams(param)).to.be.eql([param, undefined, undefined]);
      }

      for (const param of params) {
        expect(guessPddClientGenerateParams(param, callback)).to.be.eql([param, undefined, callback]);
      }
    });

    it('will guess param as user access', function () {
      const access = { a: 1, b: 2 };
      expect(guessPddClientGenerateParams(access)).to.be.eql([undefined, access, undefined]);
      expect(guessPddClientGenerateParams(access, callback)).to.be.eql([undefined, access, callback]);
    });

    it('will guess all param ok', function () {
      const params = [
        {
          code: 'code',
        },
        {
          refresh_token: 'code',
        },
      ];
      const access = { a: 1, b: 2 };
      for (const param of params) {
        expect(guessPddClientGenerateParams<{ a: number; b: number }>(param, access)).to.be.eql([
          param,
          access,
          undefined,
        ]);
        expect(guessPddClientGenerateParams<{ a: number; b: number }>(param, access, callback)).to.be.eql([
          param,
          access,
          callback,
        ]);
      }
    });
  });
});
