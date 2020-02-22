export interface RunStateInterface {
  // 已经完成的api的ID
  resolved: string[];
  // 已经完成的api的文件内容
  resolvedFiles: {
    [s: string]: {
      name: string;
      files: RunStateFileInterface[];
    };
  };
  //
  resolvedDirectories: string[];
}

export interface RunStateFileInterface {
  // api 名称
  apiName: string;

  // 文件名
  name: string;

  // 常量名称
  constVariable: string;

  // 请求的Interface
  requestInterface: string;

  // 响应的Interface
  responseInterface: string;
}
