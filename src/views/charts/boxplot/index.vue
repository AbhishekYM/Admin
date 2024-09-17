<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { boxChart, boxplotScatterChart, horizontalBoxplotChart } from "./data";

export default {
    page: {
        title: "Boxplot Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            boxChart: boxChart,
            boxplotScatterChart: boxplotScatterChart,
            horizontalBoxplotChart: horizontalBoxplotChart,
            title: "Boxplot Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Boxplot Charts",
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
                        <BCardTitle class="mb-0">Basic Box Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="boxChart.series" :options="boxChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Boxplot with Scatter Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="boxplotScatterChart.series" :options="boxplotScatterChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Horizontal BoxPlot</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="horizontalBoxplotChart.series" :options="horizontalBoxplotChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>