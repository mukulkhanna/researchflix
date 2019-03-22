import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbar: {
      state: false,
      color: '',
      content: 'a',
      time: null
    },
    baseUrl: 'http://localhost:4000'
  },
  getters: {
    getBaseUrl: (state) => state.baseUrl,
    getSnack: (state) => state.snackbar
  },
  mutations: {
    closeSnackbar (state) {
      state.snackbar.state = false
    },
    createSnackbar (state, payload) {
      state.snackbar.state = true
      state.snackbar.color = 'white'
      state.snackbar.content = payload.content
      state.snackbar.time = 3000
    },
    networkError (state) {
      state.snackbar.state = true
      state.snackbar.color = 'red'
      state.snackbar.content = 'Network Error'
      state.snackbar.time = 0
    }
  },
  actions: {
    createSnackbar ({ commit }, obj) {
      commit('createSnackbar', obj)
    },
    networkError ({ commit }) {
      commit('networkError')
    },
    closeSnackbar ({ commit }) {
      commit('closeSnackbar')
    }
  }
})
