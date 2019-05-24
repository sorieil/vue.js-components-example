import { TOKEN_GET, TOKEN_SET } from './constant_types'

export const state = () => ({
  accessToken: '',
  refreshToken: '',
  tokenType: '',
  expiresIn: ''
})

export const getters = {
  [TOKEN_GET.defines]: state => state
}

export const actions = {}

export const mutations = {
  [TOKEN_SET.defines](
    state,
    { token_type, access_token, refresh_token, expires_in }
  ) {
    state = Object.assign(state, {
      accessToken: access_token,
      tokenType: token_type,
      refreshToken: refresh_token,
      expiresIn: expires_in
    })
  }
}
