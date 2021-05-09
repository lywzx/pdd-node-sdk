/**
 * @type import('@lywzx/rollup-build-script/interfaces/package-option').IRollupConfig
 */
module.exports = {
  ts: true,
  tsconfigOverride: {
    include: ["src"],
    exclude: ["test"],
    compilerOptions: {
      "module": "ES6",
    }
  },
  externalEachOther: true,
  external: ['debug', 'axios', 'lodash', 'async', 'crypto-js', '@nestjs/common', 'zlib', '@nestjs/core'],
  inputPrefix: 'src',
  workspace: ['packages'],
  handleConfig(config) {
    return config;
  }
}
