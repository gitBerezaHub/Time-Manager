<template>
  <div class="background">
    <h1>Statistic</h1>
    <div class="content">
      <a @click="this.$router.go(-1)">НАЗАД</a><br />

      <label>Выберите месяц: </label>
      <input v-model="date" type="month" @change="getStatistic" />

      <div>
        <label>Выберите часть: </label>
        <select v-model="part" @change="getStatistic">
          <option value="1">Первая</option>
          <option value="2">Вторая</option>
        </select>
      </div>

      <h1>Часов: {{ minutes / 60 }}</h1>
      <h1>ЗП: {{ payment }}₽</h1>
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

.cont {
  color: #244782;
  display: flex;
  width: 80vw;
  flex-direction: column;
  background: #fff;
}
</style>
