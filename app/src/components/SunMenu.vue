<template>
  <div class="background" @click.self="close">
    <div class="cont">
      <svg class="background-poly">
        <polygon id="poly" fill="#fff" points="" />
      </svg>
      <div class="container">
        <h1 class="menu-title">Menu</h1>
        <router-link class="menu-el" to="/statistic/">Statistic</router-link>
        <p class="menu-el logout" @click="logout">Logout</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SunMenu",
  data() {
    return {
      text: this.default_text,
    };
  },
  props: {
    default_text: { type: String, default: "" },
  },
  methods: {
    async logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
    setPolySize() {
      let points = `
          0, 0
          0, ${window.innerHeight * 0.5}
          ${window.innerWidth}, ${window.innerHeight * 0.45}
          ${window.innerWidth}, 0
      `;
      let poly = document.getElementById("poly");
      poly.setAttribute("points", points);
    },
    close() {
      this.$emit("close");
    },
  },
  watch: {
    async text() {
      this.$emit("edit", this.text);
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

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.container {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-poly {
  z-index: -1;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 50vh;
}

.menu-el {
  text-decoration: none;
  color: #244782;
  margin-top: 30px;
  font-size: 32px;
}

.menu-title {
  font-size: 64px;
  color: #244782;
  margin-top: 10px;
}

.logout {
  color: red;
}
</style>
