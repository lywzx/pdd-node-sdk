const fs = require('fs');
const path = require('path');

const lernaPackage = JSON.parse(fs.readFileSync(path.join(__dirname, '../lerna.json')).toString());

const entries = [
  {
    input: 'src/index.ts',
    file: 'lib/index.esm.browser.js',
    format: 'es',
    browser: true,
    transpile: false,
    env: 'development',
  },
  {
    input: 'src/index.ts',
    file: 'lib/index.esm.browser.min.js',
    format: 'es',
    browser: true,
    transpile: false,
    minify: true,
    env: 'production',
  },
  // todo remove transpile
  { input: 'src/index.ts', file: 'lib/index.esm.js', format: 'es', transpile: false, env: 'development' },
  { input: 'src/index.ts', file: 'lib/index.js', format: 'umd', transpile: false, env: 'development' },
  { input: 'src/index.ts', file: 'lib/index.min.js', format: 'umd', transpile: false, minify: true, env: 'production' },
  { input: 'src/index.ts', file: 'lib/index.common.js', format: 'cjs', transpile: false, env: 'development' },
];

const packages = [
  {
    dir: 'scripts',
    outputName: 'PddGenerateUtil',
    banner: `/*!
 * @pin-duo-duo/scripts v${lernaPackage.version}
 * (c) ${new Date().getFullYear()} LiuYang
 * @license MIT
 */`,
    external: ['lodash', 'async', 'axios'],
    onlyModule: {
      only: ['cjs', 'es'],
      browser: true
    }
  },
  {
    dir: 'pdd-origin-api',
    outputName: 'PddOriginUtil',
    banner: `/*!
 * @pin-duo-duo/pdd-origin-api v${lernaPackage.version}
 * (c) ${new Date().getFullYear()} LiuYang
 * @license MIT
 */`,
  },
  {
    dir: 'core',
    outputName: 'PddNodeSdk',
    banner: `/*!
 * @pin-duo-duo/core v${lernaPackage.version}
 * (c) ${new Date().getFullYear()} LiuYang
 * @license MIT
 */`,
    external: ['debug', 'axios', 'lodash'],
    es: {
      external(browser) {
        if (browser) {
          return [];
        }
        return ['crypto-js', '@pin-duo-duo/pdd-origin-api' ,'async'];
      }
    },
    umd: {
      external: []
    },
    cjs: {
      external: [ 'crypto-js', '@pin-duo-duo/pdd-origin-api', 'async']
    },
    globals: {
      'lodash': '_',
      '@pin-duo-duo/pdd-origin-api': 'PddOriginUtil'
    }
  },
  {
    dir: 'nestjs',
    outputName: 'PddNestJsModule',
    banner: `/*!
 * @pin-duo-duo/nestjs v${lernaPackage.version}
 * (c) ${new Date().getFullYear()} LiuYang
 * @license MIT
 */`,
    external: ['@nestjs/common', 'zlib', '@nestjs/core'],
    onlyModule: {
      only: ['cjs'],
      browser: false
    },
  },
  {
    dir: 'redis-throttle-adapter',
    outputName: 'PddRedisThrottleAdapter',
    banner: `/*!
 * @pin-duo-duo/redis-throttle-adapter v${lernaPackage.version}
 * (c) ${new Date().getFullYear()} LiuYang
 * @license MIT
 */`,
    onlyModule: {
      only: ['cjs', 'es'],
      browser: false
    },
    external: ['@pin-duo-duo/core'],
    globals: {
      '@pin-duo-duo/core': 'PddNodeSdk',
    }
  },
];

module.exports = {
  entries,
  packages,
};
