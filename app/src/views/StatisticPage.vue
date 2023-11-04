<template class="background">
  <div class="content">
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
        @change="getStatistic"
      />
    </div>

    <div class="statistic__row">
      <label class="statistic__item">part</label>
      <span class="statistic__item">first</span>
    </div>
    <h2 class="statistic__title">Summary</h2>
    <div class="statistic__row">
      <span class="statistic__item">hours</span>
      <span class="statistic__item">{{ minutes / 60 }}</span>
    </div>
    <div class="statistic__row">
      <span class="statistic__item">payment</span>
      <span class="statistic__item">{{ payment }}₽</span>
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
      part: (new Date().getDate() > 15) + 1,
      minutes: 0,
      payment: 0,
    };
  },
  methods: {
    async getStatistic() {
      try {
        let res = await axios.get(
          this.$store.state.API_URL +
            "/notes/me/summary/" +
            this.date +
            "/" +
            this.part,
          { headers: { Authorization: this.$store.state.token } }
        );
        this.minutes = res.data.minutes;
        this.payment = res.data.payment;
        console.log(this.minutes);
        console.log(this.payment);
      } catch (e) {
        console.log("Error on load statistic");
      }
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
  height: 100vh;
  background: #fff;
}

.content {
  color: #244782;
  display: flex;
  max-width: 600px;
  padding: 0 20px;
  flex-direction: column;
  background: #fff;
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
    font-size: 48px;
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
    font-size: 24px;
    color: #244782;
    border: none;
    width: 230px;
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
