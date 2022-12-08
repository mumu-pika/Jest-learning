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


import { configObj } from "utils/env";

describe('configObj env getter', () => {
  it('开发环境', () => {
    jest.spyOn(configObj, 'env', 'get').mockReturnValue('dev')
    expect(configObj.env).toEqual('dev')
  })

  it('生产环境', () => {
    jest.spyOn(configObj, 'env', 'get').mockReturnValue('prod')
    expect(configObj.env).toEqual('prod')
  })
})