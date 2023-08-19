import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

store.subscribe((mutation, state) => {
  localStorage.setItem("time_manager_token", JSON.stringify(state.token));
});

createApp(App).use(store).use(router).mount("#app");
