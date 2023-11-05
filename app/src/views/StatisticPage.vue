<template>
  <div class="background">
    <div class="page">
      <div class="header">
        <a class="header__icon" @click="this.$router.go(-1)">&lt;</a><br />
        <h1 class="header__title">Statistic</h1>
      </div>
      <div class="statistic__row">
        <label class="statistic__item">month</label>
        <input
          v-model="date"
          class="statistic__input"
          type="month"
          @input="getStatistic"
        />
      </div>

      <div class="statistic__row">
        <label class="statistic__item">part</label>
        <span class="statistic__item" @click="change_part">{{
          part ? "second" : "first"
        }}</span>
      </div>
      <h2 class="statistic__title">Summary</h2>
      <div class="statistic__row">
        <span class="statistic__item">hours</span>
        <span class="statistic__item">{{ hours }}</span>
      </div>
      <div class="statistic__row">
        <span class="statistic__item">payment</span>
        <span class="statistic__item">{{ payment }}₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "StatisticPage",
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      part: new Date().getDate() > 15,
      minutes: 0,
      payment: 0,
    };
  },
  methods: {
    async getStatistic() {
      try {
        this.minutes = "-";
        this.payment = "-";
        let res = await axios.get(
          this.$store.state.API_URL +
            "/notes/me/summary/" +
            this.date +
            "/" +
            (this.part + 1),
          { headers: { Authorization: this.$store.state.token } }
        );
        this.minutes = res.data.minutes;
        this.payment = res.data.payment;
      } catch (e) {
        this.minutes = "-";
        this.payment = "-";
      }
    },
    change_part() {
      this.part = !this.part;
      this.getStatistic();
    },
  },
  computed: {
    hours() {
      let hours = Math.floor(this.minutes / 60);
      if (isNaN(hours)) {
        hours = "-";
      }
      return hours;
    },
  },
  mounted() {
    this.getStatistic();
  },
});
</script>

<style lang="scss" scoped>
.background {
  color: #244782;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #bfe0f3;
}

.page {
  color: #244782;
  display: flex;
  width: 100%;
  margin: 0 20px;
  max-width: 500px;
  padding: 0 20px;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;

  &__icon {
    font-size: 48px;
    padding-right: 20px;
  }

  &__title {
    text-align: center;
    font-size: 48px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }
}

.statistic {
  &__row {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__input {
    text-align: right;
    font-size: 24px;
    color: #244782;
    border: none;
    padding: 0;
  }

  &__item {
    font-size: 24px;
    color: #244782;
  }

  &__title {
    text-align: center;
    margin-top: 50px;
    font-size: 36px;
  }
}
</style>
