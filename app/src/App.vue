<template>
  <router-view class="cont" />
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
  },
  beforeMount() {
    document.title = "Time Manager";

    this.$router.push("/login");
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

.cont {
  max-width: 500px;
}
</style>
