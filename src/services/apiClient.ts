import axios from 'axios'
import { handleApiError } from '../utils/handleApiError'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

api.interceptors.response.use(undefined, (err) => {
  handleApiError(err)

  return Promise.reject(err)
})

export default api
