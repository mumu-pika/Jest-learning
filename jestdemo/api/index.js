import axios from 'axios'

// 这里假定了url是/api, 有效无效都可以，因为不会真的发请求
export const axiosRequest = () => {
  return axios.get('/api').then(res => res.data)
}

// 这里指定一个api地址, 并在fetchData中完成对url的拼接
export const API = 'https://www.baidu.com'

export const fetchData = async query => {
  const url = `${API}/search?query=${query}`
  return await axios.get(url)
}