// src/utils/storage.ts
/* 
  在很多时候，我们前端的代码往往只在浏览器里运行，
  经常要用到浏览器的 API。我之前就封装过一个 storage 文件，
  通过指定 type = 'indexedDB' | 'cookie' | 'localStorage' 来切换存储的方式，
  而且还可以生成自定义的 key，防止全局污染。

  对刚说的 storage 做下简化，我们只对 localStorage 进行封装，一共有 set 和 get 两个函数。
*/

const KEY_NAME = 'my-app-'

const set = (key: string, value: string) => {
  localStorage.setItem(KEY_NAME + key, value)
}

const get = (key: string) => {
  return localStorage.getItem(KEY_NAME + key)
}

const storage = {
  get,
  set,
}

export default storage
