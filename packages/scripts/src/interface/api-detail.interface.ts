export interface ApiDetailInterface {
  id: number;
  catId: number;
  apiName: string;
  scopeName: string;
  usageScenarios: string;
  needOauth: number;
  chargeType: number;
  platform: number;
  scenesId: number | null;
  scenesName: string | null;
  roleId: number | null;
  roleName: string | null;
  requestCodeExample: string | null;
  responseCodeExample: string;
  feeType: string;

  requestParamList: ApiDetailRequestParamInterface[];

  responseParamList: ApiDetailResponseParamInterface[];

  errorParamList: ApiDetailErrorParamInterface[];

  permissionsPkgs: ApiDetailPermissionInterface[];

  sdkDemos: ApiDetailSdkDemoInterface[];
}

export interface ApiDetailRequestParamInterface {
  id: number;
  parentId: number;
  childrenNum: number;
  paramName: string;
  paramType: string;
  isMust: number;
  defaultValue: string;
  example: string;
  paramDesc: string;
}

export interface ApiDetailResponseParamInterface {
  id: number;
  parentId: number;
  childrenNum: number;
  paramName: string;
  paramType: string;
  sourcePath: string | null;
  example: string;
  paramDesc: string;
}

export interface ApiDetailErrorParamInterface {
  errorCode: string;
  errorMsg: string;
  solution: string;
  outerErrorCode: string;
}

export interface ApiDetailSdkDemoInterface {
  name: string;
  description: string;
  url: string;
}

export interface ApiDetailPermissionInterface {
  id: number;
  name: string;
  description: string;
  appTypeList: any[];
}
