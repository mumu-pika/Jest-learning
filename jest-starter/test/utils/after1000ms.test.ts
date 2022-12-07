// src/utils/after1000ms.test.ts

import after1000ms from "utils/after1000ms"

// 下面这个是没有使用mock的方式
// 我们不得不等待1000ms才能跑完这个用例
// describe("after1000ms", () => {
//   it("可以在1000ms后自动执行函数", (done) => {
//     after1000ms(() => {
//       expect("??")
//       done()
//     })
//   })
// })

/* 
  使用jest.fn 生成一个监听函数, 然后马上断言这个函数
  是没有被调用过的; 之后, 在调用after1000ms之后, 用
  jest.runAllTimers快进时间, 最后来判断callback是否
  只被调用了一次。
*/

describe('after1000ms', () => {
  beforeAll(() => {
    jest.useFakeTimers() // 使用mock定时器
  })

  it("可以在1000ms后自动执行函数", () => {
    jest.spyOn(global, "setTimeout") // 监听setTimeout函数
    const callback = jest.fn()
    
    // 断言这个函数是没有调用过的
    expect(callback).not.toHaveBeenCalled()

    after1000ms(callback)

    jest.runAllTimers() // 快进时间
  })
})