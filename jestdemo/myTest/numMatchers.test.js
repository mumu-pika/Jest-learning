/* 
  Jest匹配器, 数字类型匹配相关
*/

test('toBe匹配', () => {
  // toBe相当于严格相等 ===
  expect('001号战斗员').toBe('001号战斗员')
})

test('toEqual匹配', () => {
  // toEqual相当于值相等 ==
  const a = {number: "001"}
  expect(a).toEqual({number: "001"})
})

test('toBeNull匹配', () => {
  // toBeNull用来匹配值是不是null这个值
  const a = null
  expect(a).toBeNull()
})

test('toBeUndefined匹配', () => {
  // toBeUndefined用来匹配值是不是undefined这个值
  const a = undefined
  expect(a).toBeUndefined()
})

test('toBeDefined匹配', () => {
  // toBeDefined用来匹配值是不是有定义的值
  const a = 1
  expect(a).toBeDefined()
})

test('toBeTruthy匹配', () => {
  // toBeTruthy用来匹配值是不是true这个值
  const a = 100
  expect(a).toBeTruthy()
})

test('toBeFalsy匹配', () => {
  // toBeFalsy用来匹配值是不是false这个值
  const a = 0
  expect(a).toBeFalsy()
})

test('toBeGreaterThan匹配', () => {
  // toBeGreaterThan用来匹配值是不是比选定的值大
  // >
  const count = 1
  expect(count).toBeGreaterThan(0)
})

test('toBeLessThan匹配', () => {
  // toBeLessThan用来匹配值是不是比选定的值小 
  // <
  const count = 1
  expect(count).toBeLessThan(5)
})

test('toBeGreaterThanOrEqual匹配', () => {
  // toBeGreaterThanOrEqual用来匹配值是不是>=选定的值
  // >=
  const count = 1
  expect(count).toBeGreaterThanOrEqual(1)
})

test('toBeLessThanOrEqual匹配', () => {
  // toBeLessThanOrEqual用来匹配值是不是<=选定的值
  // <=
  const count = 1
  expect(count).toBeLessThanOrEqual(1)
})

test('toBeCloseTo匹配', () => {
  // toBeCloseTo可以解决浮点数精度的问题
  const one = 0.1
  const two = 0.2
  expect(one + two).toBeCloseTo(0.3)
})


