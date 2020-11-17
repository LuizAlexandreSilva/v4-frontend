import axios from 'axios'
import { handleApiError } from '../utils/handleApiError'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.response.use(undefined, (err) => {
  handleApiError(err)

  return Promise.reject(err)
})

export default api
