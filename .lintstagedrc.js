#!/usr/bin/env node

module.exports = {
  '*.{ts,tsx}': [
    './node_modules/.bin/prettier --write',
    './node_modules/.bin/eslint --fix',
    './node_modules/.bin/mocha --require ts-node/register --require tsconfig-paths/register packages/**/*.spec.ts --colors'
  ],
};
