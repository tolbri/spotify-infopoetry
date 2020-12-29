import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        accessToken: null,
        user: null,
    },
    getters: {
        accessToken: state => state.accessToken,
        user: state => state.user
    },
    actions: {
        saveAccessToken({ commit }, { accessToken }) {
            commit('ADD_ACCESS_TOKEN', {accessToken})
        },
        saveUser({ commit}, { user }) {
            commit('ADD_USER', { user })
        }
    },
    mutations: {
        ADD_ACCESS_TOKEN(state, { accessToken}) {
            state.accessToken = accessToken
        },
        ADD_USER(state, { user }) {
            state.user = user
        }

    },
    modules: {

    }
});

export default store