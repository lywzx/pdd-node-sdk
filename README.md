# 拼多多开放平台Node版SDK

拼多多开放平台链接地址：`https://open.pinduoduo.com/#/apidocument`

sdk职在辅助快速开发，除了几个简单的方便，可以在src/pddApi/中，找到拼多多官网上的类型声明信息(通过js抓取生成的代码)。

# 安装及使用

```sh
# install
npm install pdd-node-sdk --save # or：yarn add pdd-node-sdk
```

在代码中，导入`PddClient`实例始可使用：

```typescript
import {
  PddClient,
} from 'pdd-node-sdk';

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
} from 'pdd-node-sdk';

async function getGoodsTemplate(catId, assessToken) {
  const detail = await client.execute(
    PDD_GOODS_CAT_TEMPLATE_GET,
    {
      access_token: '',
      cat_id: '',
    }
  );

  // ...
  return detail;
}
```