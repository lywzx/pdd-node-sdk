/**
 * @type import('@lywzx/rollup-build-script/interfaces/package-option').IRollupConfig
 */
module.exports = {
  ts: true,
  dts: true,
  tsconfigOverride: {
    include: ["src"],
    exclude: ["test"],
    compilerOptions: {
      "module": "ES6",
    }
  },
  externalEachOther: true,
  external: [
    'debug',
    'axios',
    'lodash',
    'async',
    'crypto-js',
    '@nestjs/common',
    '@nestjs/core',
    'zlib',
    'redis'
  ],
  inputPrefix: 'src',
  workspace: ['packages'],
  outputGlobals: {
    'lodash': '_',
    '@pin-duo-duo/pdd-origin-api': 'PddOriginUtil',
    '@pin-duo-duo/core': 'PddNodeSdk',
  }
}
