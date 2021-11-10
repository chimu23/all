import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  // baseURL: '',

  timeout: 5000,
})

http.interceptors.response.use((res) => Promise.resolve(res.data))

export default http
