<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { basicRadarChart, radarMultiseriesChart, polygonRadarChart } from "./data";

export default {
  page: {
    title: "Radar Charts",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      basicRadarChart: basicRadarChart,
      radarMultiseriesChart: radarMultiseriesChart,
      polygonRadarChart: polygonRadarChart,
      title: "Radar Charts",
      items: [
        {
          text: "Apexcharts",
          href: "/",
        },
        {
          text: "Radar Charts",
          active: true,
        },
      ],
    };
  },
  components: {
    Layout,
    PageHeader,
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
            <BCardTitle class="mb-0">Basic Radar Chart</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRadarChart.series" :options="basicRadarChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Radar Chart - Multiple series</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="radarMultiseriesChart.series" :options="radarMultiseriesChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Radar Chart - Polygon Fill</BCardTitle>
          </BCardHeader>
          <BCardBody>
            <apexchart class="apex-charts" height="350" dir="ltr" :series="polygonRadarChart.series" :options="polygonRadarChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>