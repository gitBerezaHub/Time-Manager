<template>
  <div class="current-date-content">
    <p>{{ day }} {{ monthList[new Date().getMonth()] }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrentDate",

  data() {
    return {
      day: new Date().getDate(),
      monthNum: new Date().getMonth(),
      monthList: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.current-date-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4vh;

  p {
    text-align: center;
    font-size: 64px;
    color: #244782;
    user-select: none;
    font-weight: 300;
  }
}
</style>
