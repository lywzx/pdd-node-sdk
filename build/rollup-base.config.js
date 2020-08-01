import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import rollupTypescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { readJsonSync } from 'fs-extra';
import { join } from 'path';

export function createEntries(configs, pkg) {
  return configs.map(c => createEntry(c, pkg));
}

function createEntry(config, pakg, banner) {
  const pkg = readJsonSync(join(__dirname, '../packages', pakg.dri, 'package.json'));
  const c = {
    input: join(__dirname, '../packages', pakg.dir, config.input),
    plugins: [
      rollupTypescript({
        tsconfig: join(__dirname, '../packages', pkgName, 'tsconfig.json'),
        tsconfigOverride: {
          include: ["src"],
          exclude: ["test"],
          compilerOptions: {
            "module": "ES6",
          }
        }
      }),
      json(),
    ],
    output: {
      banner,
      file: join(__dirname, '../packages', pkgName, config.file),
      format: config.format,
      globals: {
        lodash: '_'
      }
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg);
      }
    },
    external: ['async', 'axios', 'lodash']
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
        transforms: { generator: false }
      })
    );
  }

  c.plugins.push(
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.mjs']
    })
  );
  c.plugins.push(
    commonjs({
      transformMixedEsModules: true,
      extensions: ['.ts', '.tsx', '.js'],
    })
  );

  if (config.minify) {
    c.plugins.push(terser({ module: config.format === 'es' }));
  }

  return c;
}
