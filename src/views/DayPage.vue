<template>
  <current-date></current-date>
  <time-circle></time-circle>
  <description-field></description-field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentDate from "@/components/CurrentDate.vue";
import TimeCircle from "@/components/TimeCircle.vue";
import DescriptionField from "@/components/DescriptionField.vue";

export default defineComponent({
  name: "CertainDayPage",
  components: { DescriptionField, TimeCircle, CurrentDate },
});
</script>

<style scoped lang="scss"></style>
