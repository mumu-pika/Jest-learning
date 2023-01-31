// 这里提供一个函数, 用于后面测试用
const fn1 = (items, callback) => {
  for (let i = 0; i < items.length; ++i) {
    callback(items[i])
  }
}

/* 
  测试这个函数时，我们不关心callback的内部逻辑，只想知道在forEach函数执行时它有没有被调用，
  所以在编写测试用例时，我们可以使用一个mock函数来代替callback，
  然后通过检查 mock 函数来确保回调函数是否如期调用。
*/

describe("模拟函数测试集", () => {
  test("模拟函数fn1实现", () => {
    // 这里mock掉callback, 为的是能检查函数的调用情况
    const mockCallback = jest.fn()
    fn1([0, 1], mockCallback)
    console.log(mockCallback.mock)
    expect(mockCallback.mock.calls.length).toBe(2) // 期望callback被调用了两次
    expect(mockCallback.mock.calls[0][0]).toBe(0) // 第一次调用时候, 第一个参数是0
    expect(mockCallback.mock.calls[1][0]).toBe(1) // 第二次调用时候, 第一个参数是1
  })
})