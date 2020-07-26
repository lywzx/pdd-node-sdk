# `@pin-duo-duo/pdd-origin-api`

> 这个包中的内容，是根据拼多多开放平台只提供的文档自动生成得来的。如果文档存在变量，重新执行`npm run generate-code`重新生成包内容。欢迎大家提`merge request`.

## 使用方法

### 安装

```bash
npm install @pin-duo-duo/pdd-origin-api --save # or：yarn add @pin-duo-duo/pdd-origin-api
```


### API名称常量

通常拼多多接口的名称为：pdd.delete.goods.commit，代码中直接可以能过导入常量使用：PDD_DELETE_GOODS_COMMIT.

```typescript
import { PDD_DELETE_GOODS_COMMIT } from '@pin-duo-duo/pdd-origin-api';
```

### 常用的类型

* `PddCommonRequestInterface`: 拼多多通用请求的参数
* `PddCollectRootResponseInterface`：响应的数据结构
* `PddCollectShortResponseInterface`: 响应数据数据结构，包含了请求的`key`与响应数据的类型映射，方便在`typescript`中使用类型推断
* `PddResponseTypeAndRequestTypeMapping`: 拼多多响应数据，通过包含无用的多级结构，这个是请求name与响应数据key之间的映射。

### 较有用常量

* `PddNeedAccessTokenTypeCollections`: 是一个数组，包含了哪些接口需要授权。

### 获取某个接口的限频率信息

* `PddApiLimiterMapping`: 一个数据，包含了对应`api`的限流信息，如下：

```typescript
export const PddApiLimiterMapping = {
    [PDD_GOODS_ADD_LIMITERS]: [
    // 商家限流信息
     {
       limiterLevel: 1,
       timeRange: 1,
       times: 20,
     },
    // 接口总限流频次
     {
       limiterLevel: 3,
       timeRange: 5,
       times: 4000,
     },
    // 应用限流频次
     {
       limiterLevel: 4,
       timeRange: 10,
       times: 2000,
     },
   ]
}
```
