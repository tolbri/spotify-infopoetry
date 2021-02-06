import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        accessToken: null,
        user: null,
        deviceId: null,
        selectedSong: null,
        isPlaying: false,
        currentPosition: null,
        duration: null,
        progress: null,
        errorMessage: false,
        topTracks: null,
        audioFeatures: null
    },
    getters: {
        accessToken: state => state.accessToken,
        user: state => state.user,
        deviceId: state => state.deviceId,
        selectedSong: state => state.selectedSong,
        isPlaying: state => state.isPlaying,
        currentPosition: state => state.currentPosition,
        duration: state => state.duration,
        progress: state => state.progress,
        errorMessage: state => state.errorMessage,
        topTracks: state => state.topTracks,
        audioFeatures: state => state.audioFeatures
    },
    actions: {
        saveAccessToken({ commit }, { accessToken }) {
            commit('ADD_ACCESS_TOKEN', {accessToken})
        },
        saveUser({ commit}, { user }) {
            commit('ADD_USER', { user })
        },
        saveDeviceId({ commit}, { deviceId }) {
            commit('ADD_DEVICE', { deviceId })
        },
        saveSelectedSong({ commit}, { selectedSong }) {
            commit('ADD_SONG', { selectedSong })
        },
        saveIsPlaying({ commit}, { isPlaying }) {
            commit('ADD_PLAYBACK', { isPlaying })
        },
        saveCurrentPosition({ commit}, { currentPosition }) {
            commit('ADD_POSITION', { currentPosition })
        },
        saveDuration({ commit}, { duration }) {
            commit('ADD_DURATION', { duration })
        },
        saveProgress({ commit}, { progress }) {
            commit('ADD_PROGRESS', { progress })
        },
        saveErrorMessage({ commit}, { errorMessage }) {
            commit('ADD_ERROR_MESSAGE', { errorMessage })
        },
        saveTopTracks({ commit}, { topTracks }) {
            commit('ADD_TOP_TRACKS', { topTracks })
        },
        saveAudioFeatures({ commit}, { audioFeatures }) {
            commit('ADD_AUDIO_FEATURES', { audioFeatures })
        }


    },
    mutations: {
        ADD_ACCESS_TOKEN(state, { accessToken}) {
            state.accessToken = accessToken
        },
        ADD_USER(state, { user }) {
            state.user = user
        },
        ADD_DEVICE(state, { deviceId }) {
            state.deviceId = deviceId
        },
        ADD_SONG(state, { selectedSong }) {
            state.selectedSong = selectedSong
        },
        ADD_PLAYBACK(state, { isPlaying }) {
            state.isPlaying = isPlaying
        },
        ADD_POSITION(state, { currentPosition }) {
            state.currentPosition = currentPosition
        },
        ADD_DURATION(state, { duration }) {
            state.duration = duration
        },
        ADD_PROGRESS(state, { progress }) {
            state.progress = progress
        },
        ADD_ERROR_MESSAGE(state, { errorMessage }) {
            state.errorMessage = errorMessage
        },
        ADD_TOP_TRACKS(state, { topTracks }) {
            state.topTracks = topTracks
        },
        ADD_AUDIO_FEATURES(state, { audioFeatures }) {
            state.audioFeatures = audioFeatures
            console.log(audioFeatures);
        }
    },
    modules: {

    }
});

export default store