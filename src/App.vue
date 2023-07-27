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
  background-color: #bfe0f3;
  height: 100%;
}
.content {
  max-width: 500px;
}
</style>
