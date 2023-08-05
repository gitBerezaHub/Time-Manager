<template>
  <router-view class="content" />
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("initialiseVars");
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

.content {
  max-width: 500px;
}
</style>
