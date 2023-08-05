import { createStore } from "vuex";

export default createStore({
  state: {
    API_URL:
      process.env.VUE_APP_API_URL !== undefined
        ? process.env.VUE_APP_API_URL
        : "/api",
    userID: null,
  },
  getters: {},
  mutations: {
    setUserID(state, userID) {
      state.userID = userID;
    },
    initialiseVars(state) {
      if (localStorage.getItem("userID")) {
        state.userID = JSON.parse(localStorage.userID);
      }
    },
  },
  actions: {},
  modules: {},
});
