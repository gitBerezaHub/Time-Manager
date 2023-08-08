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
  },
  beforeMount() {
    document.title = "Time Manager";

    if (this.$store.state.userID === null) {
      this.$router.push("/login");
    } else {
      this.$store.commit("formatDate");
      this.$router.push(`/${this.$store.state.date}`);
    }
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
