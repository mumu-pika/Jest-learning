import { fetchData, fetchData2, fetchData3 } from "./fetchData"
// 1、回调函数式
test('FetchData 测试', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      message: "success"
    })
    done()
  })
})

// 2、直接返回promise
// 注意！！这里有个问题！
// 一定要用上return
test('FetchData2 测试', () => {
  return fetchData2().then(
    response => {
      expect(response.data).toEqual({
        message: "success"
      })
    }
  )
})

// 3、接口不存在测试用例
test('FetchData3 测试', () => {
  // 为了避免正确的请求不会执行catch中的代码，所以需要断言至少执行一次
  expect.assertions(1) // 断言, 必须执行一次expect
  return fetchData3().catch(e => {
    // 判断状态码是否 404
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})

// 4、使用async/await的方式一
test('async/await 测试1', async() => {
  // .resolves将对象转变为promise对象
  // toMatchObject比对其中的属性
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
       message: "success"
    }
  })
})

// 4、使用async/await的方式二
test('async/await 测试2', async() => {
  const response = await fetchData2()
  expect(response.data).toEqual({
    message: "success"
  })
})