// src/utils/env.ts

// export const config = {
//   // 获取当前所在的是什么环境
//   getEnv() {
//     // 这里有很复杂的逻辑...
//     return 'test'
//   }
// }

// 考虑对象的存取
export const configObj = {
  get env() {
    return 'test'
  },
  set env(value) {
    // console.log('setter, ' + value)
  }
}