import {
  SET_TOKEN,
  SET_INFO_USER,
  CLEAR_TOKEN
} from './mutation-types'
import AuthService from '@/services/AuthService'

const service = new AuthService()

export default {
  login ({ commit }, form) {
    return new Promise((resolve, reject) => {
      service.login(form)
        .then((res) => {
          commit(SET_TOKEN, res.access_token)
          resolve(res.access_token)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  setInfoUserLogin ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      service.infoUserLogin()
        .then((res) => {
          commit(SET_INFO_USER, res.user)
          resolve(res.permissions)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      service.logout()
        .then((res) => {
          commit(CLEAR_TOKEN)
          resolve(res)
        })
        .catch(err => {
          if (err.status === 401 || err.status === 404) {
            commit(CLEAR_TOKEN)
            resolve()
          }
          reject(err)
        })
    })
  }
}
