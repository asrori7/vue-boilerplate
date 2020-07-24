import {
  SET_TOKEN,
  SET_INFO_USER,
  CLEAR_TOKEN
} from './mutation-types'

export default {
  [SET_TOKEN] (state, token) {
    state.token = token
  },

  [SET_INFO_USER] (state, user) {
    state.user = { name: user.name }
  },

  [CLEAR_TOKEN] (state) {
    state.token = null
    state.user = { name: '' }
  }
}
