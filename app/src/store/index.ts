import { createStore } from "vuex";

export default createStore({
  state: {
    API_URL:
      process.env.VUE_APP_API_URL !== undefined
        ? process.env.VUE_APP_API_URL
        : "/api",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
