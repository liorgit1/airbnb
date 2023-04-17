<template>
  <PieChart :chartData="testData" />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { PieChart } from "vue-chart-3";
import { orderService } from "../services/order-service";
Chart.register(...registerables);

export default {
  props: ["data"],
  components: { PieChart },
  data() {
    return {
      orders: [],
      user: null,
      testData: {
        labels: [
          "Total",
          "Pending",
          "Approved ",
          "Declined ",
        ],
        datasets: [
          {
            data: ["Total", "Pending", "Approve ","Decline"],

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
  mounted() {
    this.testData.datasets[0].data = this.data;
  },
};
</script>

<style>
#pie-chart {
  height: 250px;
  width: 250px;
}
</style>
