import { createStore } from 'vuex';

export default createStore({
  state: {
    appState: '',
    currentPage: 1,
    mouseState: 'rectangle',
    currentScrollPercent: 0,
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
    scrollState(state, newScroll) {
      state.currentScrollPercent = newScroll;
    },
  },
  getters: {
    getState: (state) => state.appState,
    getCurrentPage: (state) => state.currentPage,
    getMouseState: (state) => state.currentPage,
    getScrollState: (state) => state.currentScrollPercent,
  },
  actions: {
  },
  modules: {
  },
});
