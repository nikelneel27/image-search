<template>
  <div id="notes"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
        },
        title: {
          text: "Camera's Used",
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          bottom: "-10%",
          left: "left",
          textStyle: {
            color: "#fff",
          },
          // Color: "#fff",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 8,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
              textStyle: {
                color: "#fff",
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Nikon" },
              { value: 735, name: "Cannon" },
              { value: 580, name: "Sony" },
              { value: 484, name: "Olympic" },
              { value: 300, name: "Gopro" },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    var chartDom = document.getElementById("notes");
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
#notes {
  width: 100%;
  height: 200px;
}
@media (max-width: 768px) {
  #notes {
    height: 300px;
  }
}

@media (min-width: 768px) {
  #notes {
    height: 400px;
  }
}
</style>
        
        