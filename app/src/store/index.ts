import { createStore } from "vuex";

export default createStore({
  state: {
    API_URL:
      process.env.VUE_APP_API_URL !== undefined
        ? process.env.VUE_APP_API_URL
        : "/api",
    userID: null,
    date: "",
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
    formatDate(state) {
      const date: Date = new Date();
      let day: string | number = date.getDate();
      let month: string | number = date.getMonth() + 1;
      const year: string | number = date.getFullYear();
      if (day < 10) {
        day = `0${day}`;
      }
      if (month < 10) {
        month = `0${month}`;
      }
      state.date = `${year}-${month}-${day}`;
    },
  },
  actions: {},
  modules: {},
});
