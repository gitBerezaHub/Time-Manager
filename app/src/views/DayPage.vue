<template>
  <button class="sun" @click="isSunMenuShow = true">Sun</button>
  <sun-menu v-if="isSunMenuShow" @click="isSunMenuShow = false"></sun-menu>
  <current-date @click="isTextareaShow = false"></current-date>
  <time-circle
    :minutes="minutes"
    :minutes-per-click="60"
    @editMinutes="editMinutes"
  ></time-circle>
  <div
    v-if="!isTextareaShow"
    class="sand-container"
    @click="isTextareaShow = true"
  >
    <div class="bottom-sand"></div>
  </div>
  <description-field
    v-else
    :default_text="text"
    @close="isTextareaShow = false"
    @edit="editText"
  ></description-field>
</template>

<script>
import { defineComponent } from "vue";
import CurrentDate from "@/components/CurrentDate.vue";
import TimeCircle from "@/components/TimeCircle.vue";
import DescriptionField from "@/components/DescriptionField.vue";
import SunMenu from "@/components/SunMenu.vue";
import axios from "axios";

export default defineComponent({
  name: "DayPage",
  components: { DescriptionField, TimeCircle, CurrentDate, SunMenu },
  data() {
    return {
      date: this.$route.params.date,
      isTextareaShow: false,
      isSunMenuShow: false,
      minutes: null,
      text: "",
    };
  },

  methods: {
    async logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
    async getDayData() {
      try {
        let dayNote = await axios.post(
          this.$store.state.API_URL + "/notes/me/" + this.date,
          { minutes: 0, text: "" },
          { headers: { Authorization: this.$store.state.token } }
        );
        this.text = dayNote.data.text;
        this.minutes = dayNote.data.minutes;
      } catch (e) {
        console.log("Error on load day data");
      }
    },
    async editText(text) {
      this.text = text;
      await axios.patch(
        this.$store.state.API_URL + "/notes/me/" + this.$route.params.date,
        { text: this.text },
        { headers: { Authorization: this.$store.state.token } }
      );
    },
    async editMinutes(minutes) {
      this.minutes = minutes;
      await axios.patch(
        this.$store.state.API_URL + "/notes/me/" + this.$route.params.date,
        { minutes: this.minutes },
        { headers: { Authorization: this.$store.state.token } }
      );
    },
  },
  async beforeMount() {
    if (!this.$store.dispatch("authenticate")) {
      this.$router.push("/login");
    }
    await this.getDayData();
  },
});
</script>

<style lang="scss" scoped>
.sun {
  position: absolute;
  right: 0;
  top: 0;
}

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
