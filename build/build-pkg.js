const { run } = require('./build');

const files = [
  'lib/index.esm.browser.js',
  'lib/index.esm.browser.min.js',
  'lib/index.esm.js',
  'lib/index.js',
  'lib/index.min.js',
  'lib/index.common.js',
];

run('rollup.config.js', files);
