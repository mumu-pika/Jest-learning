// const sum = require('./sum')

import { sum } from './sum'

test("add 1 + 2 to equals 3", () => {
  expect(sum(1, 2)).toBe(3)
})

/* 
  jest本身是有babel-jest这个文件，
  当我们使用yarn test 或者 npm test命令的时候,
  会先去检测项目根目录或者开发环境中有没有babel,
  如果有babel, 会去寻找有没有babelrc这个配置文件
  找到配置文件, 就会进行转换了

*/