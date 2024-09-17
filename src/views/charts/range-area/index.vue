<script>
import Layout from "@/layouts/main.vue";
import appConfig from "../../../../app.config";
import PageHeader from "@/components/page-header";

import { basicRangeAreaChart, comboChart } from "./data";

/**
 * Mixed chart component
 */
export default {
  page: {
    title: "Range Area Charts",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      basicRangeAreaChart: basicRangeAreaChart,
      comboChart: comboChart,
      title: "Range Area Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/",
        },
        {
          text: "Range Area Charts",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Basic Range Area Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <!-- <div id="basic_range_area" data-colors='["--vz-primary"]' class="apex-charts" dir="ltr"> -->
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRangeAreaChart.series" :options="basicRangeAreaChart.chartOptions"></apexchart>
            <!-- </div> -->
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Combo</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <div>
              <apexchart class="apex-charts" height="350" dir="ltr" :series="comboChart.series" :options="comboChart.chartOptions"></apexchart>
              <div id="combo_range_area" data-colors='["--vz-info", "--vz-danger"]' class="apex-charts" dir="ltr"></div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>