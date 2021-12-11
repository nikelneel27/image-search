<template>
  <b-card class="bar-card bar-card-main" title="Doughnut">
    <b-card class="bar-card" img-bottom>
      <ChartDoughnutBase :chart-data="chartData" />
    </b-card>
  </b-card>
</template>

<script>
import ChartDoughnutBase from "@/components/ChartDoughnutBase";

export default {
  components: {
    ChartDoughnutBase,
  },
  data() {
    return {
      chartData: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ["Foo", "Bar", "Baz"],
        datasets: [
          {
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [10, 20, 40],
          },
        ],
      };
    },
  },
};
</script>
<style scoped>
.bar-card-main {
  max-width: 400px;
  width: 100%;
  height: auto;
}
.bar-card {
  background-color: #dbdce2;
}
</style>