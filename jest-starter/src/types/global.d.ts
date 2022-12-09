// src/types/global.d.ts
// 全局声明类型文件

// 声明less文件
declare module "*.less" {
  // const content: any
  const content: { [classname: string]: string };
  export default content;
}
