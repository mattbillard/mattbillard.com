import Vue from 'vue'
import Vuex from 'vuex'
import textModule from './modules/textModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    textModule
  }
})
