<template>
  <h1 v-if="loading" class="loading">Loading...</h1>
  <router-view v-if="!loading" class="content" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      date: "",
      loading: false,
    };
  },
  beforeCreate() {
    this.$store.commit("initialiseVars");

    this.loading = true;
    console.log("here", this.loading);
    const is_authenticate = this.$store.dispatch("authenticate");
    this.loading = false;
    console.log("gere", this.loading);

    if (!is_authenticate) {
      this.$router.push("/login");
    }
    if (this.$route.path === "/") {
      const date = new Date().toISOString().split("T")[0];
      this.$router.push("/me/" + date);
    }
  },
  beforeMount() {
    document.title = "Time Manager";
  },
};
</script>

<style lang="scss">
@import "src/assets/reset-styles";

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif !important;
  background-color: #bfe0f3;
  height: 100%;
}
</style>
