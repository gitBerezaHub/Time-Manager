<template>
  <div class="time-circle-content">
    <div class="circle" @click="addHour()">
      <h1>{{ hours }}</h1>
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
    };
  },

  methods: {
    addHour: function () {
      this.hours++;
    },
  },
});
</script>

<style scoped lang="scss">
.time-circle-content {
  display: flex;
  justify-content: center;
}
.circle {
  width: 50vw;
  height: 50vw;
  max-width: 250px;
  max-height: 250px;
  background-color: #3d9971;
  border: 20px solid #fff;
  margin-top: 24px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
}

p {
  margin-top: 10px;
}
</style>
