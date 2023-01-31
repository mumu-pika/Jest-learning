import Axios from 'axios'

export const shopReq = Axios.create({
  baseURL: '/api1', // 配置命中
})

shopReq.interceptors.response.use((response) => {
  // response.config => config
  // config.headers => 请求头
  // 1、处理token
  if (response.data.token) {
    sessionStorage.setItem('token', response.data.token)
  }
  if (response.data.code === 200) {
    console.log('正常提示', response.data.message)
  } else {
    console.log('业务异常提示')
  }
  return response
})
