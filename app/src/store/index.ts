import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    API_URL:
      process.env.VUE_APP_API_URL !== undefined
        ? process.env.VUE_APP_API_URL
        : "/api",
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token !== null;
    },
    isNotLogin(state) {
      return state.token === null;
    },
  },
  mutations: {
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = null;
    },
    initialiseVars(state) {
      if (localStorage.getItem("time_manager_token")) {
        state.token = JSON.parse(localStorage.time_manager_token);
        console.log("Load token = ", state.token);
      }
    },
  },
  actions: {
    async authenticate(context) {
      try {
        await axios.get(context.state.API_URL + "/users/me", {
          headers: { Authorization: context.state.token },
        });
      } catch {
        console.log("Logout");
        context.commit("logout");
        return false;
      }
      return true;
    },
  },
  modules: {},
});
