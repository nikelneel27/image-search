import Vue from 'vue'
import Vuex from 'vuex'
import SearchImageModule from './SearchImageModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        SearchImageModule
    }
})