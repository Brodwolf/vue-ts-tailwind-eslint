import SessionPayload from '@/interfaces/SessionPayload'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

/**
 * Retorna a token de autenticação
 */
export const getToken = () => {
  const token = Cookies.get('USERSESSID')

  if (!token) {
    throw new Error('USERSESSID cookie not found')
  }

  return token
}

/**
 * Retorna o payload da token de autenticação
 */
export const getPayload = (): SessionPayload => {
  const token = getToken()
  return jwtDecode(token)
}
