import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

import user from './modules/user';
import card from './modules/card';


const state = {
    
}

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        user, card
    },
    getters:{
        getState: state => {
            return state
        }
    }
})

export default store