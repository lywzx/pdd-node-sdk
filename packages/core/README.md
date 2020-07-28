# 拼多多开放平台 Node 版 SDK

拼多多开放平台链接地址：[https://open.pinduoduo.com/#/apidocument](https://open.pinduoduo.com/#/apidocument)

`@pin-duo-duo/core`职在辅助快速开发，除了方便使用，sdk 还提供了的拼多多开放平台的类型声名，独立包`@pin-duo-duo/pdd-origin-api`。如果你在使用中发布类型声明文件与官方文档不一致，可以安装`@pin-duo-duo/scripts`包，重新生成声明文件。

[![Build Status](https://img.shields.io/travis/lywzx/pdd-node-sdk/master.svg)](https://travis-ci.org/lywzx/pdd-node-sdk)
[![codecov](https://codecov.io/gh/lywzx/pdd-node-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/lywzx/pdd-node-sdk)
[![NPM version](https://img.shields.io/npm/v/pdd-node-sdk.svg?style=flat-square)](https://www.npmjs.com/package/pdd-node-sdk)
[![NPM downloads](https://img.shields.io/npm/dm/@pin-duo-duo/core.svg?style=flat-square)](https://www.npmjs.com/package/@pin-duo-duo/core)
[![Known Vulnerabilities](https://snyk.io/test/github/lywzx/pdd-node-sdk/badge.svg?targetFile=package.json)](https://snyk.io/test/github/lywzx/pdd-node-sdk?targetFile=package.json)
[![License](https://img.shields.io/npm/l/pdd-node-sdk.svg?sanitize=true)](https://www.npmjs.com/package/pdd-node-sdk)
[![Dependency Status](https://david-dm.org/lywzx/pdd-node-sdk.svg)](https://david-dm.org/lywzx/pdd-node-sdk)
[![devDependencies Status](https://david-dm.org/lywzx/pdd-node-sdk/dev-status.svg)](https://david-dm.org/lywzx/pdd-node-sdk?type=dev)

# 安装及使用

```sh
# install
npm install @pin-duo-duo/core --save # or：yarn add @pin-duo-duo/core
```

在代码中，导入`PddClient`实例始可使用：

```typescript
import { PddClient } from '@pin-duo-duo/core';

// 根据开放平台信息，填写以下内容
const client = new PddClient({
  clientId: 'clientId',
  clientSecret: 'clientSecret',
});
```

## 调用`获取商品类目属性`示例

```typescript
import {
  // ...
  PDD_GOODS_CAT_TEMPLATE_GET,
} from '@pin-duo-duo/core';

async function getGoodsTemplate(catId, assessToken) {
  const detail = await client.execute(PDD_GOODS_CAT_TEMPLATE_GET, {
    access_token: '',
    cat_id: '',
  });

  // ...
  return detail;
}
```

# 关于打印日志

`@pin-duo-duo/core`是依赖于[debug](https://github.com/visionmedia/debug)包打印日志，所以你可以在启动时，在环境变量中添加：

```bash
set DEBUG=pdd:log && ...
```

具体关于`debug`的使用，可以参见`debug`文档。

# 待完善：

- 添加完善的单元测试
- 添加 API 调用文件锁
