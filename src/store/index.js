import { createStore } from 'vuex';

export default createStore({
  state: {
    appState: '',
    currentPage: 1,
    currentCoursePage: '',
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
    currentCoursePage(state, newCurrentCoursePage) {
      console.log(newCurrentCoursePage);
      state.currentCoursePage = newCurrentCoursePage;
    },
    scrollState(state, newScroll) {
      state.currentScrollPercent = newScroll;
    },
  },
  getters: {
    getState: (state) => state.appState,
    getCurrentPage: (state) => state.currentPage,
    getCurrentCoursePage: (state) => state.currentCoursePage,
    getMouseState: (state) => state.currentPage,
    getScrollState: (state) => state.currentScrollPercent,
  },
  actions: {
  },
  modules: {
  },
});
