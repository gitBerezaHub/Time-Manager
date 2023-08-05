<template>
  <div class="login-container">
    <p class="login-label" @click="setPolySize()">Login</p>
    <svg class="background-poly">
      <polygon points="" id="poly" fill="#fff" />
    </svg>
    <div class="input-container">
      <input class="login-input" placeholder="account" />
      <input class="login-input" type="password" placeholder="password" />
    </div>
    <button class="login-button">login</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  methods: {
    setPolySize() {
      let points = `0, 40 0, ${window.innerHeight} ${window.innerWidth}, ${window.innerHeight} ${window.innerWidth}, 0`;
      let poly = document.getElementById("poly");
      poly.setAttribute("points", points);
    },
  },
  mounted() {
    this.setPolySize();
    window.addEventListener("resize", this.setPolySize);
  },
  unmounted() {
    window.removeEventListener("resize", this.setPolySize);
  },
});
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
  z-index: 1;
}

.login-label {
  font-size: 64px;
  margin-top: 9vh;
  font-weight: 300;
  color: #244782;
}

.login-input {
  all: unset;
  font-size: 32px;
  display: flex;
  width: 65%;
  border-bottom: 1px solid #244782;
  padding: 45px 10px 0;

  &::placeholder {
    color: #afb8c7;
    font-weight: 300;
    text-align: center;
  }
}

.background-poly {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 75vh;
}

.login-button {
  font-size: 32px;
  font-weight: 300;
  z-index: 1;
  margin-top: 12vh;
  padding: 10px 0;
  width: 72%;
  background-color: #72afd2;
  color: #fff;
  border: none;
  border-radius: 50px;
}
</style>
