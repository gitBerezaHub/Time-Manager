import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

store.subscribe((mutation, state) => {
  localStorage.setItem("userID", JSON.stringify(state.userID));
});

createApp(App).use(store).use(router).mount("#app");
