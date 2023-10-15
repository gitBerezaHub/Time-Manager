<template>
  <div class="background" @click.self="close">
    <div class="content">
      <svg class="background-poly">
        <polygon id="poly" fill="#fff" points="" />
      </svg>
      <div class="container">
        <h1 class="done">Done</h1>
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
  left: 25vw;
  top: 0;
  margin-bottom: 10px;
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
</style>
