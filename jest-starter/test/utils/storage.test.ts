// tests/utils/storage.test.ts
import storage from "utils/storage";

/* 
  Node.js 环境中并没有 localStorage, 直接测试会报错;
  于是我们可以mock一个：
    首先添加 tests/jest-setup.ts 文件，然后放置 localStorage 的 Mock 实现。

*/

describe('storage', () => {
  it('可以设置缓存', () => {
    storage.set("newKey", "hello")
    expect(localStorage.getItem('my-app-newKey')).toEqual('hello')
  })

  it('可以获取缓存', () => {
    localStorage.setItem('my-app-newKey', 'hello')
    expect(storage.get('newKey')).toEqual('hello')
  })
})