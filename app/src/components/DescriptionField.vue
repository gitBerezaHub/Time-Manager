<template>
  <div class="content">
    <svg class="background-poly">
      <polygon id="poly" fill="#fff" points="" />
    </svg>
    <div class="container">
      <h1 class="done">Done</h1>
      <textarea
        v-model="text"
        class="description-text"
        placeholder="Write your done features here..."
      ></textarea>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DescriptionField",
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
      let points = `0, 40 0, ${window.innerHeight} ${window.innerWidth}, ${window.innerHeight} ${window.innerWidth}, 0`;
      let poly = document.getElementById("poly");
      poly.setAttribute("points", points);
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .done {
    margin-top: 16px;
    font-size: 64px;
    color: #244782;
  }

  .description-text {
    border: none;
    height: 25vh;
    max-width: 85vw;
    margin-top: 20px;
    padding: 20px;
    font-size: 24px;
    color: #244782;
  }
}

.background-poly {
  z-index: -1;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60vh;
}
</style>
