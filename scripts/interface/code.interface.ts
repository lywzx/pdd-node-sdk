export interface CodeInterface {
  name: string;

  // 接口备注信息
  comment: string;

  // 当前代码的所有字段
  /**
   * @type CodeColumnInterface[]
   */
  columns: CodeColumnInterface[];
}

// 代码每个字段的内容
export interface CodeColumnInterface {
  // 变量名称
  name: string;

  // 变量类型
  type: string;

  // 是否选传
  optional?: boolean;

  // 备注
  comment: string;

  // 示例
  example: string;
}
