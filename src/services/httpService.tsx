import axios from 'axios'

const baseURL = 'http://192.168.0.107:8080'

const http = axios.create({
  baseURL,
  headers: {
    'x-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
})

export const httpUtils = {
  setHeader(header: string, value?: string | number) {
    http.defaults.headers.common[header] = value
  },
  removeHeader(header: string) {
    delete http.defaults.headers.common[header]
  }
}
export default http
