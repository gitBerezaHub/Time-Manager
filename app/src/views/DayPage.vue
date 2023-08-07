<template>
  <current-date @click="isTextareaShow = false"></current-date>
  <time-circle></time-circle>
  <div
    class="sand-container"
    @click="isTextareaShow = true"
    v-if="!isTextareaShow"
  >
    <div class="bottom-sand"></div>
  </div>
  <description-field v-else description-field></description-field>
</template>

<script>
import { defineComponent } from "vue";
import CurrentDate from "@/components/CurrentDate.vue";
import TimeCircle from "@/components/TimeCircle.vue";
import DescriptionField from "@/components/DescriptionField.vue";
import axios from "axios";

export default defineComponent({
  name: "DayPage",
  components: { DescriptionField, TimeCircle, CurrentDate },
  data() {
    return {
      date: this.$route.params.date,
      isTextareaShow: false,
    };
  },

  methods: {
    async getDayData() {
      axios.post(
        this.$store.state.API_URL +
          "/" +
          this.$store.state.userID +
          "/" +
          this.date,
        { minutes: 0, text: "" }
      );
    },
  },

  beforeCreate() {
    if (this.$store.state.userID === null) {
      this.$router.push("/login");
    }
  },
  async beforeMount() {
    await this.getDayData();
  },
});
</script>

<style scoped lang="scss">
.sand-container {
  position: fixed;
  bottom: 0;
  left: 0;
}

.bottom-sand {
  position: relative;
  overflow: hidden;
  height: 24vh;
  width: 100vw;
  background-color: #bfe0f3;
}

.bottom-sand:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 150%;
  background-color: #f5c072;
  transform-origin: 100% 100%;
  transform: skewY(-5deg);
}

@media screen and (min-width: 800px) {
  .bottom-sand:before {
    transform: skewY(-2deg);
  }
}
</style>
