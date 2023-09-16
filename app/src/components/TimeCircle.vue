<template>
  <div class="time-circle-content">
    <div class="circle" @pointerdown="pointerDown()" @pointerup="pointerUp()">
      <h1>{{ minutes !== null ? Math.floor(minutes / 60) : "-" }}H</h1>
      <p v-if="minutes % 60">{{ minutes % 60 }}m</p>
      <p>worked</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimeCircle",

  data() {
    return {
      timer: 0,
    };
  },
  props: {
    minutes: { type: Number, required: false },
    minutesPerClick: {
      type: Number,
      default: 60,
    },
  },
  methods: {
    pointerDown() {
      if (this.minutes === undefined) {
        return;
      }
      this.timer = Math.floor(new Date().getTime());
      if (this.minutes <= 24 * 60 - this.minutesPerClick) {
        this.$emit("editMinutes", this.minutes + this.minutesPerClick);
      }
    },
    pointerUp() {
      this.timer = 0;
    },
  },
  watch: {
    async timer() {
      if (!this.timer) {
        return;
      }
      let timeout = 1200;
      await new Promise((r) => setTimeout(r, timeout));
      if (
        this.minutes !== null &&
        this.timer &&
        new Date().getTime() - this.timer >= timeout
      ) {
        this.$emit("editMinutes", 0);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.time-circle-content {
  display: flex;
  justify-content: center;
  user-select: none;
}

.circle {
  width: 50vw;
  height: 50vw;
  max-width: 250px;
  max-height: 250px;
  background-color: #fff;
  border: 10px solid #72afd2;
  margin-top: 9vh;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
}

h1 {
  font-size: 64px;
}

p {
  font-size: 32px;
  margin-top: 10px;
}
</style>
