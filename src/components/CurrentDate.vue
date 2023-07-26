<template>
  <div class="current-date-content">
    <h1>{{ date }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrentDate",

  data() {
    return {
      date: new Date().toJSON().split("T")[0],
    };
  },
});
</script>

<style scoped lang="scss">
.current-date-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #008000;
  box-shadow: 0 10px 5px #006000;
  border-radius: 0 0 16px 16px;
  height: 40px;
  width: 100vw;

  h1 {
    text-align: center;
    font-size: 22px;
  }
}
</style>
