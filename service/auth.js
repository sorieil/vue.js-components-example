import Base from './base'

export default class Auth extends Base {
  constructor(componentScope) {
    super(componentScope)
    this.apiName = 'auth'
  }

  createAccessToken() {
    const params = { grant_type: 'temporary' }
    return this.axios.$post(`${this.baseUrl}/auth/token`, params)
  }
}
