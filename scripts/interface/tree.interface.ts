export type TreeType<T extends {}> = T & {
  children?: Array<TreeType<T>>;
};
