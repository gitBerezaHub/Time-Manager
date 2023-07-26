<template>
  <main>
    <div class="description-field-content">
      <label> Выполненные задачи: </label>
      <textarea class="task-text" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DescriptionField",

  data() {
    return {
      text: "",
    };
  },
});
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.description-field-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 10px 15px;
  overflow: hidden;
  width: 80vw;
  max-width: 250px;
  background-color: #00b300;
}

.task-text {
  width: 80vw;
  max-width: 250px;
  height: 30vh;
  resize: vertical;
  outline: none;
  margin-top: 20px;
  padding: 10px;
  color: #fff;
  background-color: #00b300;
  border: 1px solid #00b300;
  border-radius: 16px;
  transition: 0.3s;

  &:focus {
    background-color: #00b300;
    border: 1px solid #008000;
    box-shadow: -3px 5px 5px #019101;
    transform: translateY(-5px);
  }
}
</style>
