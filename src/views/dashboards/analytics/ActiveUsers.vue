<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import {
    CountTo
} from "vue3-count-to";

export default {
    data() {
        return {
            basicBarChart: {
                series: [{
                    data: [1365, 1220, 1100, 780, 584, 500],
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: "bar",
                        toolbar: {
                            show: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    colors: ["#e1e7fc", "#eef0f7", "#3762ea"],
                    grid: {
                        borderColor: "#f1f1f1",
                    },
                    xaxis: {
                        categories: [
                            "Brazil",
                            "Canada",
                            "Serbia",
                            "US",
                            "Russia",
                        ],
                    },
                },
            }
        };
    },
    methods: {
        initialMap() {
      // Create a chart instance
      const chart = am4core.create("chartDiv", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antarctica
      polygonSeries.exclude = ["AQ"];

      // Make map load polygon data (country shapes and names) from GeoJSON
      polygonSeries.useGeodata = true;

      // Configure series
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#d6dae6");

      let imageSeries = chart.series.push(new am4maps.MapImageSeries());

      let imageSeriesTemplate = imageSeries.mapImages.template;
      let circle = imageSeriesTemplate.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#374151");
      circle.fillOpacity = 1;
      circle.stroke = am4core.color("#FFF");
      circle.strokeOpacity = 0.5;
      circle.strokeWidth = 5;
      circle.nonScaling = true;
      circle.tooltipText = "{title}";

      imageSeriesTemplate.propertyFields.latitude = "latitude";
      imageSeriesTemplate.propertyFields.longitude = "longitude";

      imageSeries.data = [{
        "latitude": 56.130367,
        "longitude": -106.346771,
        "title": "Canada"
      }, {
        "latitude": 37.090240,
        "longitude": -95.712891,
        "title": "United States"
      }, {
        "latitude": -14.235004,
        "longitude": -51.925282,
        "title": "Brazil"
      }, {
        "latitude": 44.016521,
        "longitude": 21.005859,
        "title": "Serbia"
      }, {
        "latitude": 61.5240,
        "longitude": 105.3188,
        "title": "Russia"
      }];
    },

    },
    mounted() {
        this.initialMap();

    },
    components: {
        CountTo
    }
};
</script>
<template>
<BCol xl="9">
    <BCard no-body class="card-height-100">
        <BCardHeader class="d-flex align-items-center">
            <BCardTitle title-tag="h5" class="mb-0 flex-grow-1">Active Users Right Now</BCardTitle>
            <div class="flex-shrink-0">
                <BButton type="button" variant="subtle-primary" size="sm"><i class="bi bi-file-earmark-text me-1 align-baseline"></i> Reports</BButton>
            </div>
        </BCardHeader>
        <BCardBody>
            <BRow>
                <BCol lg="6">
                    <div id="chartDiv" style="height: 340px"></div>
                </BCol>
                <BCol lg="6">
                    <div class="mb-4">
                        <h6 class="text-muted mb-3 fw-medium fs-xs text-uppercase">Compared to last month</h6>
                        <h3>
                            <count-to :startVal="0" :duration="5000" :endVal="53736"></count-to>
                            <small class="text-muted fw-normal fs-sm ms-1">Users</small>
                        </h3>
                    </div>
                    <div>
                        <apexchart class="apex-charts" height="265" dir="ltr" :series="basicBarChart.series" :options="basicBarChart.chartOptions"></apexchart>
                    </div>
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</BCol>
</template>
