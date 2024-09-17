<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { basicPolarareaChart, polarAreaMonochromeChart } from "./data";

export default {
    page: {
        title: "Polararea Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            basicPolarareaChart: basicPolarareaChart,
            polarAreaMonochromeChart: polarAreaMonochromeChart,
            title: "Polararea Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Polararea Charts",
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
                        <BCardTitle class="mb-0">Basic Polararea Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="320" dir="ltr" :series="basicPolarareaChart.series" :options="basicPolarareaChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">PolarArea Monochrome</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="320" dir="ltr" :series="polarAreaMonochromeChart.series" :options="polarAreaMonochromeChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>