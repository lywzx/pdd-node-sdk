import { createEntries } from './rollup-base.config';

const config = [
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
  // { input: 'src/index.ts', file: 'lib/index.esm.js', format: 'es', env: 'development' },
  // { input: 'src/index.ts', file: 'lib/index.js', format: 'umd', env: 'development' },
  { input: 'src/index.ts', file: 'lib/index.min.js', format: 'umd', minify: true, env: 'production' },
  { input: 'src/index.ts', file: 'lib/index.common.js', format: 'cjs', env: 'development' },
];
const dirs = [
  'scripts',
  'pdd-origin-api',
  'core',
];
export default dirs.map(dir => createEntries(config, dir, '')).flat();
