<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      option: {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          top: "-2%",
          text: "Daily Uploads",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          top: "10%",
          data: ["Nature", "Wildlife", "Portrait"],
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLine: {
              show: false,
            },

            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",

            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "Nature",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgba(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 212, 141, 234, 90, 350, 280],
          },

          {
            name: "Wildlife",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgba(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },

          {
            name: "Portrait",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgba(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [295, 222, 202, 214, 60, 310, 210],
          },
        ],
      },
    };
  },
  mounted() {
    var chartDom = document.getElementById("main");
    this.myChart = echarts.init(chartDom, null, { renderer: "svg" });

    this.option && this.myChart.setOption(this.option);
  },
  props: {
    value1: {
      type: Number,
      default: 0,
    },
    value2: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    value1(val) {
      this.updateCharts(val);
    },
    value2(val) {
      this.updateCharts(val);
    },
  },
  methods: {
    updateCharts(val) {
      const updatedSeries = this.option.series.map((item) => {
        const data = item.data.map((value) => value * val);
        return {
          ...item,
          data,
        };
      });
      this.option = { ...this.option, series: updatedSeries };
      this.myChart.setOption(this.option);
      console.log(this.option);
    },
  },
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 200px;
}
@media (max-width: 768px) {
  #main {
    height: 300px;
  }
}

@media (min-width: 768px) {
  #main {
    height: 400px;
  }
}
</style>

