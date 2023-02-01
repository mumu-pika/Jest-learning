/* 
  模拟axios发送请求
  实际测试异步函数的时候，我们不会真正的发送ajax请求去请求这个接口，
  最好的方式还是mock数据，让它不用发送请求也能测试我们的接口调用是否正确。

*/

import axios from 'axios'
import { axiosRequest, fetchData, API } from '../api/index'

/* 
  jest.mock('axios')模拟了axios模块，并且我们自定义了请求数据，
  从而将异步获取数据转变为同步准备数据，避免了向后台去请求接口。
  注意·：jest.mock('axios')必须写在最外层
*/
jest.mock('axios')

describe('请求测试集', () => {
  it('模拟axios获取到预先设定的data', async () => {
    axios.get.mockResolvedValue({
      data: {
        name: 'pika',
        age: 16,
      },
      status: 'success',
    })
    await axiosRequest().then((data) => {
      expect(data).toEqual({
        name: 'pika',
        age: 16,
      })
    })
  })

  it('fetch data from an API successfully', async () => {
    const dummyData = {
      data: {
        id: '001',
        message: 'well done',
      },
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(dummyData))
    await expect(fetchData('saber')).resolves.toEqual(dummyData) // 断言返回的data
    expect(axios.get).toBeCalledWith(`${API}/search?query=saber`) // 断言传入的参数
  })

  it('fetch data from an API erroneously', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
    await expect(fetchData('saber')).rejects.toThrow(errorMessage) // 断言错误信息
  })

})
