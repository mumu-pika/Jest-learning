// 对于多次mock的另一种更好的方式
// import { config } from 'utils/env'

// describe('spyOn config', () => {
//   it('开发环境', () => {
//     jest.spyOn(config, 'getEnv').mockReturnValue('dev')
//     expect(config.getEnv()).toEqual('dev')
//   })
//   it('开发环境', () => {
//     jest.spyOn(config, 'getEnv').mockReturnValue('prod')
//     expect(config.getEnv()).toEqual('prod')
//   })
// })

// 对于单独导入对象
// import { configObj } from "utils/env";
// describe('configObj env getter', () => {
//   it('开发环境', () => {
//     jest.spyOn(configObj, 'env', 'get').mockReturnValue('dev')
//     expect(configObj.env).toEqual('dev')
//   })

//   it('生产环境', () => {
//     jest.spyOn(configObj, 'env', 'get').mockReturnValue('prod')
//     expect(configObj.env).toEqual('prod')
//   })
// })

// 对于直接导入变量
/* 
  我们可以借助于Object.defineProperty()来mock,
  虽然这个 API 很强大，但是使用时会污染到别的测试用例，
  因此你需要在每个用例执行完后重新赋一次原来的值。
*/
import * as envUtils from 'utils/env'

const originEnv = envUtils.env

describe('env', () => {
  afterEach(() => {
    Object.defineProperty(envUtils, 'env', {
      value: originEnv,
      writable: true,
    })
  })

  it('开发环境', () => {
    Object.defineProperty(envUtils, 'env', {
      value: 'dev',
      writable: true,
    })

    expect(envUtils.env).toEqual('dev')
  })

  it('生产环境', () => {
    Object.defineProperty(envUtils, 'env', {
      value: 'prod',
      writable: true,
    })

    expect(envUtils.env).toEqual('prod')
  })
})
