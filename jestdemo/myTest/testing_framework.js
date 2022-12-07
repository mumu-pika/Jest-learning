const Math = require('./math')

let sum = Math.sum

function sumTest() {
  let result = sum(3, 7)
  expect(result).toBe(10)
}

test('sum adds numbers', sumTest)

// 测试的方法
function test(title, callback) {
  try{
    callback()
    console.log(`√ ${title}`)
  }catch (err) {
    console.log(`× ${title}`)
    console.log(err)
  }
}


// 断言的方法
function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {}
  }
}


// setup global file 设置全局文件
global.expected = expect
global.test = test