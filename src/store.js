import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        accessToken: null,
        user: null,
        devices: null,
    },
    getters: {
        accessToken: state => state.accessToken,
        user: state => state.user,
        devices: state => state.devices
    },
    actions: {
        saveAccessToken({ commit }, { accessToken }) {
            commit('ADD_ACCESS_TOKEN', {accessToken})
        },
        saveUser({ commit}, { user }) {
            commit('ADD_USER', { user })
        },
        saveDevices({ commit}, { devices }) {
            commit('ADD_DEVICES', { devices })
        }
    },
    mutations: {
        ADD_ACCESS_TOKEN(state, { accessToken}) {
            state.accessToken = accessToken
        },
        ADD_USER(state, { user }) {
            state.user = user
        },
        ADD_DEVICES(state, { devices }) {
            state.devices = devices
        }

    },
    modules: {

    }
});

export default store