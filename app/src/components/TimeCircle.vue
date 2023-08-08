<template>
  <div class="time-circle-content">
    <div class="circle" @pointerdown="pointerDown()" @pointerup="pointerUp()">
      <h1>{{ Math.floor(minutes / 60) }}H</h1>
      <p v-if="minutes % 60">{{ minutes % 60 }}m</p>
      <p>worked</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimeCircle",

  data() {
    return {
      timer: -1,
    };
  },
  props: {
    minutes: Number,
    minutesPerClick: Number,
  },
  methods: {
    pointerDown() {
      this.timer = Math.floor(new Date().getTime());
      if (this.minutes <= 24 * 60 - this.minutesPerClick) {
        this.$emit("editMinutes", this.minutes + this.minutesPerClick);
      }
    },
    pointerUp() {
      this.timer = false;
    },
  },
  watch: {
    async timer() {
      if (!this.timer) {
        return;
      }
      await new Promise((r) => setTimeout(r, 800));
      if (this.timer && new Date().getTime() - this.timer >= 800) {
        this.$emit("editMinutes", 0);
      }
    },
  },
});
</script>

<style scoped lang="scss">
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
