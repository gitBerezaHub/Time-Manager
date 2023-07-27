<template>
  <main>
    <div class="description-field-content"></div>
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

<style scoped lang="scss"></style>
