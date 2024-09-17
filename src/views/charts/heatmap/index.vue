<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { multipleSeriesHeatmapChart, basicHeatmapChat, colorHeatmapChart, shadesHeatmapChart, } from "./data";

export default {
    page: {
        title: "Heatmap Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            multipleSeriesHeatmapChart: multipleSeriesHeatmapChart,
            basicHeatmapChat: basicHeatmapChat,
            colorHeatmapChart: colorHeatmapChart,
            shadesHeatmapChart: shadesHeatmapChart,
            title: "Heatmap Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Heatmap Charts",
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
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Basic Heatmap Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="450" dir="ltr" :series="basicHeatmapChat.series" :options="basicHeatmapChat.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Heatmap - Multiple Series</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="450" dir="ltr" :series="multipleSeriesHeatmapChart.series" :options="multipleSeriesHeatmapChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Heatmap Color Range</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="colorHeatmapChart.series" :options="colorHeatmapChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Heatmap - Range Without Shades</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="shadesHeatmapChart.series" :options="shadesHeatmapChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>