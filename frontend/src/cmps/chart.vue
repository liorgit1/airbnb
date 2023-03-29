<template>
  <PieChart :chartData="testData" />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { PieChart } from "vue-chart-3";
Chart.register(...registerables);

export default {
  props: ["data"],
  components: { PieChart },
  data() {
    return {
      testData: {
        labels: [
          "Total",
          "Pending",
          "Approved ",
          "Declined ",
        ],
        datasets: [
          {
            data: [27, 7, 9, 3],

            backgroundColor: [
              // "#FFF6E6",
              "#79CCCD",
              "#6BB7B9",
              "#007D8C",
              "#ff385c",
            ],
          },
        ],
      },
    };
  },
};
</script>

<style>
#pie-chart {
  height: 250px;
  width: 250px;
}
</style>
