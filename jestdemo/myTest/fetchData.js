import axios from "axios"

// 异步获取数据的方法
// 这里传入一个callback
// 1、回调函数式
export const fetchData = (cb) => {
  axios.get('https://my-json-server.typicode.com/mumu-pika/JSONTest/Jest').then(
    response => {
      // 将结果带入一个方法
      cb(response.data)
    }
  )
}

// 2、直接返回promise
export const fetchData2 = () => {
  return axios.get('https://my-json-server.typicode.com/mumu-pika/JSONTest/Jest')
}

// 3、接口不存在测试用例, 这里给定去请求一个404页面
export const fetchData3 = () => {
  return axios.get('https://my-json-server.typicode.com/mumu-pika/JSONTest/error')
}
