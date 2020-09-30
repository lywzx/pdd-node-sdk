export type TreeType<T extends Record<string, any>> = T & {
  children?: Array<TreeType<T>>;
};
