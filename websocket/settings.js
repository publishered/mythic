import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default {
   WS_URL: `ws://127.0.0.1:8000/?auth_token=${cookie.get('auth_token')}`
}