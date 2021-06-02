process.env.NODE_ENV = 'development';
//process.env.DEBUG = '*';

module.exports = {
  "require": [
    "ts-node/register",
    "source-map-support/register",
    "tsconfig-paths/register"
  ],
  "spec": "packages/**/*.spec.ts",
  "exit": true
}
