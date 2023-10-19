<template>
  <div class="background" @click.self="close">
    <div class="cont">
      <svg class="background-poly">
        <polygon id="poly" fill="#fff" points="" />
      </svg>
      <div class="container">
        <h1 class="done">Done</h1>
        <textarea
          v-model="text"
          class="description-text"
          placeholder="Write your done features here..."
          rows="4"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
      let points = `
          0, 40
          0, ${window.innerHeight}
          ${window.innerWidth}, ${window.innerHeight}
          ${window.innerWidth}, 0
      `;
      let poly = document.getElementById("poly");
      if (poly !== null) {
        poly.setAttribute("points", points);
      }
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
  bottom: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .done {
    margin-top: 16px;
    font-size: 64px;
    color: #244782;
  }

  .description-text {
    resize: none;
    border: none;
    height: 25vh;
    width: 50vw;
    margin-top: 40px;
    font-size: 24px;
    color: #244782;
  }
}

.background-poly {
  z-index: -1;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: calc(60vh - 100px);
}

textarea {
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
}
</style>
