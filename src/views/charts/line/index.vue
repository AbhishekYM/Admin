<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import {
    basicLineChart,
    zoomableChart,
    lineDatalabelChart,
    lineAnnotation,
    syncingAreaChart,
    brushLineChart,
    brushAreaChart,
    steplineChart,
    gradientLineChart,
    realtimeLineChart,
    dashedLineChart,
    missingDataChart,
    syncingCharts1,
    syncingCharts2,
    syncingCharts3
} from "./data";

export default {
    page: {
        title: "Line Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            basicLineChart: basicLineChart,
            zoomableChart: zoomableChart,
            lineDatalabelChart: lineDatalabelChart,
            lineAnnotation: lineAnnotation,
            syncingAreaChart: syncingAreaChart,
            brushLineChart: brushLineChart,
            brushAreaChart: brushAreaChart,
            steplineChart: steplineChart,
            gradientLineChart: gradientLineChart,
            realtimeLineChart: realtimeLineChart,
            dashedLineChart: dashedLineChart,
            missingDataChart: missingDataChart,
            syncingCharts1: syncingCharts1,
            syncingCharts2: syncingCharts2,
            syncingCharts3: syncingCharts3,
            title: "Line Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Line Charts",
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
                        <BCardTitle class="mb-0">Basic Line Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicLineChart.series" :options="basicLineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Zoomable Timeseries</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="zoomableChart.series" :options="zoomableChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Line with Data Labels</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="380" dir="ltr" :series="lineDatalabelChart.series" :options="lineDatalabelChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dashed Line</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="380" dir="ltr" :series="dashedLineChart.series" :options="dashedLineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Line with Annotations</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="lineAnnotation.series" :options="lineAnnotation.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Brush Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <apexchart class="apex-charts" height="210" dir="ltr" :series="brushLineChart.series" :options="brushLineChart.chartOptions"></apexchart>
                            <apexchart class="apex-charts" height="130" dir="ltr" :series="brushAreaChart.series" :options="brushAreaChart.chartOptions"></apexchart>
                            <div id="brushchart_line" data-colors='["--tb-info"]' class="apex-charts" dir="ltr"></div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Stepline Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="steplineChart.series" :options="steplineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Gradient Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="gradientLineChart.series" :options="gradientLineChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Missing Data/ Null Value Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="missingDataChart.series" :options="missingDataChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Syncing Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div>
                            <apexchart class="apex-charts" height="160" dir="ltr" :series="syncingCharts1.series" :options="syncingCharts1.chartOptions"></apexchart>
                            <apexchart class="apex-charts" height="160" dir="ltr" :series="syncingCharts2.series" :options="syncingCharts2.chartOptions"></apexchart>
                            <apexchart class="apex-charts" height="160" dir="ltr" :series="syncingCharts3.series" :options="syncingCharts3.chartOptions"></apexchart>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>