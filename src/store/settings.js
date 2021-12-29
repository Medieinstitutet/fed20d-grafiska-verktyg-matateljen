const settings = {
  state: {
    bodyScrollDisabled: false,
    primaryNavOpen: false,
  },
  mutations: {
    disableBodyScroll(state) {
      state.bodyScrollDisabled = true;
      document.body.classList.add('scroll-disabled');
    },
    enableBodyScroll(state) {
      state.bodyScrollDisabled = false;
      document.body.classList.remove('scroll-disabled');
    },
    closePrimaryMenu(state) {
      state.primaryNavOpen = false;
    },
  },
  // Read more about actions & getters:
  // https://next.vuex.vuejs.org/guide/actions.html
  // https://next.vuex.vuejs.org/guide/getters.html
};

export default settings;
