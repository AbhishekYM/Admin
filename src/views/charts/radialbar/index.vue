<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { basicRadialBarChart, multiRadialbarChart, circleAngleChart, gradientRadialbarChart, strokedRadialbarChart, semiRadialbarChart, imageRadialbarChart } from "./data";

export default {
    page: {
        title: "Radialbar Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            basicRadialBarChart: basicRadialBarChart,
            multiRadialbarChart: multiRadialbarChart,
            circleAngleChart: circleAngleChart,
            gradientRadialbarChart: gradientRadialbarChart,
            strokedRadialbarChart: strokedRadialbarChart,
            semiRadialbarChart: semiRadialbarChart,
            imageRadialbarChart: imageRadialbarChart,
            title: "Radialbar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Radialbar Charts",
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
                        <BCardTitle class="mb-0">Simple Radialbar Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicRadialBarChart.series" :options="basicRadialBarChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Multiple Radialbar</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div id="multiple_radialbar" class="apex-charts" dir="ltr"></div>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="multiRadialbarChart.series" :options="multiRadialbarChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Circle Chart - Custom Angle</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="circleAngleChart.series" :options="circleAngleChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Gradient Circle Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="gradientRadialbarChart.series" :options="gradientRadialbarChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Stroked Circle Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="326" dir="ltr" :series="strokedRadialbarChart.series" :options="strokedRadialbarChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Radialbars with Image</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="315" dir="ltr" :series="imageRadialbarChart.series" :options="imageRadialbarChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Semi Circular Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="semiRadialbarChart.series" :options="semiRadialbarChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>