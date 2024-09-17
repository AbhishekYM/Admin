<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { basicTimeLineChart, differentColorChart, multiSeriesChart, advancedTimelineChart, multipleseriesChart } from "./data";

export default {
    page: {
        title: "Timeline Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Timeline Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Timeline Charts",
                    active: true,
                },
            ],
            basicTimeLineChart: basicTimeLineChart,
            differentColorChart: differentColorChart,
            multiSeriesChart: multiSeriesChart,
            advancedTimelineChart: advancedTimelineChart,
            multipleseriesChart: multipleseriesChart
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
                        <BCardTitle class="mb-0">Basic TimeLine Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicTimeLineChart.series" :options="basicTimeLineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Different Color For Each Bar</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="differentColorChart.series" :options="differentColorChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multi Series Timeline</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="multiSeriesChart.series" :options="multiSeriesChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Advanced Timeline (Multiple Range)</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="advancedTimelineChart.series" :options="advancedTimelineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dumbbell Chart (Horizontal)</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div id="dumbbell_horizontal_chart" data-colors='["--tb-primary", "--tb-secondary"]' class="apex-charts" dir="ltr"></div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>