<template>
  <router-view class="content" />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      date: "",
    };
  },
  beforeCreate() {
    this.$store.commit("initialiseVars");

    if (!this.$store.dispatch("authenticate")) {
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
