import { createStore } from 'vuex';

export default createStore({
  state: {
    appState: '',
    currentPage: 1,
    mouseState: 'rectangle',
  },
  mutations: {
    appState(state, newState) {
      state.appState = newState;
    },
    mouseState(state, newState) {
      state.mouseState = newState;
    },
    currentPage(state, newCurrentPage) {
      state.currentPage = newCurrentPage;
    },
  },
  getters: {
    getState: (state) => state.appState,
    getCurrentPage: (state) => state.currentPage,
    getMouseState: (state) => state.currentPage,
  },
  actions: {
  },
  modules: {
  },
});
