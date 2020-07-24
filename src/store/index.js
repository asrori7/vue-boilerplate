import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// modules
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    auth
  },

  strict: debug,

  plugins: debug ? [createLogger()] : []
})
