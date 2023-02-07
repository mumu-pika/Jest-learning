// 这里写异步的测试用例

// 这里写一个fetchData的一个异步函数为了测试用
const fetchData = (callback) => {
  setTimeout(() => {
    callback('callback message')
  }, 1000)
}

const fetchDataPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise message')
    }, 1000)
  })
}


describe('异步测试用例', () => {
  it ('调用fetchData输出', (done) => {
    const cb = (data) => {
      console.log("111")
      expect(data).toBe('callback message')
      done()
    }

    // 注意！这里需要用到done, 不然执行完毕fetchData之后, 测试就会结束了
    fetchData(cb)
  })

  it('调用fetchData返回Promise', () => {
    return fetchDataPromise().then(data => {
      expect(data).toBe('Promise message')
    })
  })
})