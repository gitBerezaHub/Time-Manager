<template>
  <div class="content">
    <svg class="background-poly">
      <polygon points="" id="poly" fill="#fff" />
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
import axios from "axios";

export default defineComponent({
  name: "DescriptionField",
  data() {
    return {
      text: "",
    };
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
      await axios.patch(
        this.$store.state.API_URL +
          "/" +
          this.$store.state.userID +
          "/" +
          this.$route.params.date,
        { text: this.text }
      );
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
