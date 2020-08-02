#!/usr/bin/env node

module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    'eslint --fix'
  ],
  '*.spec.ts': [
    'mocha --require ts-node/register --require tsconfig-paths/register packages/**/*.spec.ts --colors'
  ]
};
