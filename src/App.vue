<template>
  <router-view class="content" />
</template>

<style lang="scss">
@import "src/assets/reset-styles";
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Manrope", sans-serif;
  background-color: #3d9971;
  color: #fff;
  height: 100%;
}
.content {
  max-width: 500px;
}
</style>
