<template>
  <div class="time-circle-content">
    <div
      class="circle"
      @click="addHour()"
      @pointerdown="pointerDown()"
      @pointerup="pointerUp()"
    >
      <h1>{{ hours }}H</h1>
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
      hours: 0,
      dateDown: 0,
      dateUp: 0,
    };
  },

  methods: {
    addHour() {
      if (this.hours < 24) {
        this.hours++;
      }
    },
    pointerDown() {
      this.dateDown = Math.floor(Date.now() / 1000);
    },
    pointerUp() {
      this.dateUp = Math.floor(Date.now() / 1000);
      if (this.dateUp - this.dateDown >= 2) {
        this.hours = -1;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.time-circle-content {
  //display: flex;
  //flex-direction: column;
  //justify-content: flex-end;
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
