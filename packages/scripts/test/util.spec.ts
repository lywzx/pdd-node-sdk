import { ApiDetailInterface } from '../src/interface/api-detail.interface';
import { buildParamsToCodeArr } from '../src/util/generate-code';
import { expect } from 'chai';

const testJson: ApiDetailInterface = {
  id: 983,
  catId: 2,
  apiName: '退货入库',
  scopeName: 'pdd.nextone.logistics.warehouse.update',
  usageScenarios: '退货入库通知拼多多确认入库成功',
  needOauth: 1,
  chargeType: 0,
  platform: 0,
  scenesId: null,
  scenesName: null,
  roleId: null,
  roleName: null,
  requestCodeExample: null,
  responseCodeExample:
    '{\n  "response": {\n    "result": {\n      "after_sales_id": 0,\n      "order_sn": "str"\n    }\n  }\n}',
  feeType: 'Free',
  requestParamList: [
    {
      id: 1,
      parentId: 0,
      childrenNum: 6,
      paramName: 'request',
      paramType: 'OBJECT',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: 'request',
    },
    {
      id: 2,
      parentId: 1,
      childrenNum: 0,
      paramName: 'after_sales_id',
      paramType: 'LONG',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: '售后id',
    },
    {
      id: 3,
      parentId: 1,
      childrenNum: 0,
      paramName: 'operate_time',
      paramType: 'VOID',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: '操作时间',
    },
    {
      id: 4,
      parentId: 1,
      childrenNum: 0,
      paramName: 'order_sn',
      paramType: 'STRING',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: 'order_sn',
    },
    {
      id: 5,
      parentId: 1,
      childrenNum: 0,
      paramName: 'reverse_logistics_id',
      paramType: 'INTEGER',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: '物流公司id',
    },
    {
      id: 6,
      parentId: 1,
      childrenNum: 0,
      paramName: 'reverse_tracking_number',
      paramType: 'STRING',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: '物流单号',
    },
    {
      id: 7,
      parentId: 1,
      childrenNum: 0,
      paramName: 'warehouse_status',
      paramType: 'INTEGER',
      isMust: 1,
      defaultValue: '',
      example: '',
      paramDesc: '退货入库状态 1：成功；2：失败',
    },
  ],
  responseParamList: [
    {
      id: 1,
      parentId: 0,
      childrenNum: 1,
      paramName: 'response',
      paramType: 'OBJECT',
      sourcePath: null,
      example: '',
      paramDesc: 'response',
    },
    {
      id: 2,
      parentId: 1,
      childrenNum: 2,
      paramName: 'result',
      paramType: 'OBJECT',
      sourcePath: null,
      example: '',
      paramDesc: 'result',
    },
    {
      id: 3,
      parentId: 2,
      childrenNum: 0,
      paramName: 'after_sales_id',
      paramType: 'LONG',
      sourcePath: null,
      example: '',
      paramDesc: 'after_sales_id',
    },
    {
      id: 4,
      parentId: 2,
      childrenNum: 0,
      paramName: 'order_sn',
      paramType: 'STRING',
      sourcePath: null,
      example: '',
      paramDesc: 'order_sn',
    },
  ],
  errorParamList: [
    {
      errorCode: '10000',
      errorMsg: '参数错误',
      solution: '参数值有误，按照文档要求填写请求参数',
      outerErrorCode: '',
    },
    {
      errorCode: '10001',
      errorMsg: '公共参数错误',
      solution: '请检查请求的公共参数',
      outerErrorCode: '',
    },
    {
      errorCode: '10002',
      errorMsg: '请求方法错误，仅支持POST',
      solution: '请使用POST请求',
      outerErrorCode: '',
    },
    {
      errorCode: '10010',
      errorMsg: '应用不存在',
      solution: '您的应用不存在',
      outerErrorCode: '',
    },
    {
      errorCode: '10011',
      errorMsg: '应用已被驳回',
      solution: '请前往拼多多开放平台查看应用驳回的原因，及时修改并重新提交应用，或者创建新的应用',
      outerErrorCode: '',
    },
    {
      errorCode: '10014',
      errorMsg: '授权已被取消',
      solution: '商家和您的授权关系已经取消了',
      outerErrorCode: '',
    },
    {
      errorCode: '10016',
      errorMsg: 'client_id不正确',
      solution: '请核查您的client_id是否正确',
      outerErrorCode: '',
    },
    {
      errorCode: '10019',
      errorMsg: 'access_token已过期',
      solution: '刷新access_token或者重新授权再次获取access_token',
      outerErrorCode: '',
    },
    {
      errorCode: '10035',
      errorMsg: 'access_token已过期',
      solution: '请刷新access_token或者重新授权获取access_token',
      outerErrorCode: '',
    },
    {
      errorCode: '20004',
      errorMsg: '签名sign校验失败',
      solution: '请按照接入指南第三部分指导，生成签名',
      outerErrorCode: '',
    },
    {
      errorCode: '20005',
      errorMsg: 'ip无权访问接口，请加入ip白名单',
      solution: '把ip白名单加入白名单',
      outerErrorCode: '',
    },
    {
      errorCode: '20007',
      errorMsg: '缺少必填请求参数',
      solution: '请查看接入指南第三部分和API文档，核对公共参数和业务必填参数是否正确',
      outerErrorCode: '',
    },
    {
      errorCode: '20031',
      errorMsg: '用户没有授权访问此接口',
      solution: '您创建的应用中不包含此接口，请查看API文档，了解相关权限包',
      outerErrorCode: '',
    },
    {
      errorCode: '20032',
      errorMsg: 'access_token或client_id错误',
      solution: '检查access_token或client_id',
      outerErrorCode: '',
    },
    {
      errorCode: '50000',
      errorMsg: '系统内部错误',
      solution: '系统内部错误，请加群联系相关负责人',
      outerErrorCode: '',
    },
    {
      errorCode: '50001',
      errorMsg: '业务服务错误',
      solution: '请根据子错误判断错误详情，无法解决请联系相关负责人',
      outerErrorCode: '',
    },
    {
      errorCode: '50012',
      errorMsg: '此API已下线',
      solution: '此API已下线',
      outerErrorCode: '',
    },
    {
      errorCode: '70031',
      errorMsg: '调用过于频繁，请调整调用频率',
      solution: '调用过于频繁，请调整调用频率',
      outerErrorCode: '',
    },
    {
      errorCode: '70032',
      errorMsg: '调用过于频繁，请调整调用频率',
      solution: '调用过于频繁，请调整调用频率',
      outerErrorCode: '',
    },
    {
      errorCode: '70033',
      errorMsg: '当前接口因系统维护，暂时下线，请稍后再试！',
      solution: '当前接口因系统维护，暂时下线，请稍后再试！',
      outerErrorCode: '',
    },
    {
      errorCode: '70034',
      errorMsg: '当前用户存在风险接，禁止调用！',
      solution: '当前用户存在风险接，禁止调用！',
      outerErrorCode: '',
    },
    {
      errorCode: 'isv.***-service-error:###',
      errorMsg: '服务异常，重试处理',
      solution: '重试',
      outerErrorCode: '4000000',
    },
    {
      errorCode: 'isv.invalid-parameter:***',
      errorMsg: '请求参数错误',
      solution: '根据错误提示处理',
      outerErrorCode: '3000000',
    },
  ],
  permissionsPkgs: [
    {
      id: 13,
      name: '售后管理权限包',
      description: '包含售后相关的接口',
      appTypeList: [
        {
          id: 1,
          name: '企业ERP旧版',
        },
        {
          id: 7,
          name: '多平台ERP',
        },
        {
          id: 8,
          name: '电子发票',
        },
        {
          id: 16,
          name: '打单',
        },
        {
          id: 17,
          name: '进销存',
        },
        {
          id: 19,
          name: '搬家上货',
        },
        {
          id: 20,
          name: '跨境企业ERP',
        },
        {
          id: 22,
          name: '虚拟商家后台系统',
        },
        {
          id: 24,
          name: '企业ERP',
        },
        {
          id: 25,
          name: '商家后台系统',
        },
        {
          id: 29,
          name: '全渠道商家后台系统',
        },
        {
          id: 30,
          name: '商家测试',
        },
        {
          id: 31,
          name: '国际商家自建仓系统',
        },
      ],
    },
  ],
  sdkDemos: [
    {
      name: 'JAVA',
      description:
        'package com.pdd.pop.sdk.http.demo;\n\nimport com.pdd.pop.sdk.common.util.JsonUtil;\nimport com.pdd.pop.sdk.http.api.request.PddNextoneLogisticsWarehouseUpdateRequest;\nimport com.pdd.pop.sdk.http.api.response.PddNextoneLogisticsWarehouseUpdateResponse;\nimport com.pdd.pop.sdk.http.api.request.PddNextoneLogisticsWarehouseUpdateRequest.Request;\nimport com.pdd.pop.sdk.http.PopClient;\nimport com.pdd.pop.sdk.http.PopHttpClient;\n\npublic class PopClientDemo {\n\n    public static void main(String[] args) throws Exception {\n\n        String clientId = "your clientId";\n        String clientSecret = "your clientSecret";\n        String accessToken = "your accessToken";\n        PopClient client = new PopHttpClient(clientId, clientSecret);\n\n        PddNextoneLogisticsWarehouseUpdateRequest request = new PddNextoneLogisticsWarehouseUpdateRequest();\n\n        Request request1 = new Request();\n        request1.setAfterSalesId(0L);\n        request1.setOperateTime(null);\n        request1.setOrderSn("str");\n        request1.setReverseLogisticsId(0);\n        request1.setReverseTrackingNumber("str");\n        request1.setWarehouseStatus(0);\n        request.setRequest(request1);\n        PddNextoneLogisticsWarehouseUpdateResponse response = client.syncInvoke(request, accessToken);\n        System.out.println(JsonUtil.transferToJson(response));\n    }\n}\n',
      url: '',
    },
    {
      name: 'CURL',
      description:
        "curl -X POST 'http://host:port/api/router' \\\n-H 'Content-Type:application/x-www-form-urlencoded;charset=utf-8' \\\n-d access_token=your+access+token \\\n-d request=%7B%22after_sales_id%22%3A0%2C%22operate_time%22%3Anull%2C%22order_sn%22%3A%22str%22%2C%22reverse_logistics_id%22%3A0%2C%22reverse_tracking_number%22%3A%22str%22%2C%22warehouse_status%22%3A0%7D \\\n-d data_type=JSON \\\n-d sign=your+sign \\\n-d type=pdd.nextone.logistics.warehouse.update \\\n-d client_id=your+client+id \\\n-d timestamp=1527065024",
      url: '',
    },
  ],
};

describe('script util test', function() {
  it('should test generate code', function() {
    const result = buildParamsToCodeArr(testJson.requestParamList, testJson, 'request');

    expect(result.length).to.be.eq(2);
  });
});
