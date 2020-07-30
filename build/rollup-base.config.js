import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { readJsonSync } from 'fs-extra';
import { join } from 'path';

export function createEntries(configs, pkgName, banner) {
  return configs.map(c => createEntry(c, pkgName, banner));
}

function createEntry(config, pkgName, banner) {
  const pkg = readJsonSync(join(__dirname, '../packages', pkgName, 'package.json'));
  const c = {
    input: join(__dirname, '../packages', pkgName, config.input),
    plugins: [
      rollupTypescript({
        tsconfig: join(__dirname, '../packages', pkgName, 'tsconfig.json'),
      }),
      json(),
    ],
    output: {
      banner,
      file: join(__dirname, '../packages', pkgName, config.file),
      format: config.format,
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg);
      }
    },
  };

  if (config.format === 'umd') {
    c.output.name = c.output.name || 'Vuex';
  }

  c.plugins.push(
    replace({
      __VERSION__: pkg.version,
      __DEV__:
        config.format !== 'umd' && !config.browser
          ? "(process.env.NODE_ENV !== 'production')"
          : config.env !== 'production',
    })
  );

  if (config.transpile !== false) {
    c.plugins.push(
      buble({
        transforms: { generator: false },
        exclude: ['node_modules'],
      })
    );
  }

  c.plugins.push(
    resolve({
      mainFields: ['main'],
    })
  );
  c.plugins.push(
    commonjs({
      extensions: ['.js', '.ts', '.tsx', '.mjs'],
    })
  );

  if (config.minify) {
    c.plugins.push(terser({ module: config.format === 'es' }));
  }

  return c;
}
