/* 
  Jest匹配器, 字符串类型、数组类型匹配相关
*/

test('toMatch匹配', () => {
  // 匹配字符串str中是否有期望的子串
  const str = "saber, archer"
  expect(str).toMatch('saber')
})


test('toContain匹配数组', () => {
  // 匹配数组或是集合中是否有期望的值
  const arr = ["saber", "archer"]
  expect(arr).toContain('saber')
})

test('toContain匹配集合', () => {
  // 匹配数组或是集合中是否有期望的值
  const arr = ["saber", "archer"]
  const data = new Set(arr)
  expect(data).toContain('saber')
})

// 定义一个抛出异常的方法
const throwNewErrorFunc = () => {
  throw new Error('This is Error')
}

test('toThrow匹配', () => {
  // 匹配异常用的, 所以我们需要传入需要测试的异常
  expect(throwNewErrorFunc).toThrow()
})

// 定义一个不抛出异常的方法
const NotThrowError = () => {
  return 1
}

test('不抛出异常匹配', () => {
  // 匹配异常用的, 所以我们需要传入需要测试的异常
  // 加上not是匹配不抛出异常
  expect(NotThrowError).not.toThrow('This is Error')
})