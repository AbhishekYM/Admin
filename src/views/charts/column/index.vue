<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import { basicColumnChart, columnDatalabelChart, stackedColumnsChart, columnStackedChart, columnMarkersChart, columnRotatedLabel, columnNegativeChart, rangeColumnChart, chartYearOption, quarterChartOption, distributedColumnchart, dynamicQuarterLoadedChart, columnGroupChart, groupedStackedChart, dumbbellChart } from "./data";


export default {
    page: {
        title: "Column Charts",
        meta: [{ name: "description", content: appConfig.description }],
    },
    data() {
        return {
            title: "Column Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Column Charts",
                    active: true,
                },
            ],
            basicColumnChart: basicColumnChart,
            columnDatalabelChart: columnDatalabelChart,
            stackedColumnsChart: stackedColumnsChart,
            columnStackedChart: columnStackedChart,
            columnMarkersChart: columnMarkersChart,
            columnRotatedLabel: columnRotatedLabel,
            columnNegativeChart: columnNegativeChart,
            rangeColumnChart: rangeColumnChart,
            chartYearOption: chartYearOption,
            quarterChartOption: quarterChartOption,
            distributedColumnchart: distributedColumnchart,
            dynamicQuarterLoadedChart: dynamicQuarterLoadedChart,
            columnGroupChart: columnGroupChart,
            groupedStackedChart: groupedStackedChart,
            dumbbellChart: dumbbellChart,
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
                        <BCardTitle class="mb-0">Basic Column Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="basicColumnChart.series" :options="basicColumnChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Column with Data Labels</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnDatalabelChart.series" :options="columnDatalabelChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Stacked Column Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="stackedColumnsChart.series" :options="stackedColumnsChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Stacked Column 100</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnStackedChart.series" :options="columnStackedChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Grouped Stacked Columns</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="groupedStackedChart.series" :options="groupedStackedChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dumbbell Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="dumbbellChart.series" :options="dumbbellChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Column with Markers</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnMarkersChart.series" :options="columnMarkersChart.chartOptions"></apexchart>
                        <div id="column_markers" class="apex-charts" dir="ltr"></div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Column with Rotated Labels</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnRotatedLabel.series" :options="columnRotatedLabel.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Column with Nagetive Values</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="columnNegativeChart.series" :options="columnNegativeChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Range Column Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="rangeColumnChart.series" :options="rangeColumnChart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dynamic Loaded Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <div id="dynamicloadedchart-wrap">
                            <div id="chart-year">
                                <apexchart type="bar" height="330" ref="chart" :options="chartYearOption.chartOptions" :series="chartYearOption.series"></apexchart>
                            </div>
                            <div id="chart-quarter">
                                <apexchart type="bar" height="330" ref="chartQuarter" :options="dynamicQuarterLoadedChart.chartOptions" :series="dynamicQuarterLoadedChart.series"></apexchart>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Distributed Columns Charts</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart class="apex-charts" height="350" dir="ltr" :series="distributedColumnchart.series" :options="distributedColumnchart.chartOptions"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Dynamic Loaded Chart</BCardTitle>
                    </BCardHeader>
                    <BCardBody>
                        <apexchart type="bar" height="330" ref="chart" :options="columnGroupChart.chartOptions" :series="columnGroupChart.series"></apexchart>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>