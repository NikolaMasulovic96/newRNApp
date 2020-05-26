import http from './httpService'

export const LOGIN_PATHNAME = '/auth/login'

interface User {
    id:string
    username: string
    firstName: string
    lastName: string
    role: string
    token: string
}

const authService = {
  login: (credentials: object) => {
    return http.post(LOGIN_PATHNAME, credentials).then(response => {
      const { token, data } = response.data
      const user: User = {
        id:data.id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        token: token
      }
      return user 
    })
  },
}

export default authService
