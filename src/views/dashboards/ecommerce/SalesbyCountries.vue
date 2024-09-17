<script>
import { CountTo } from "vue3-count-to";
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

export default {
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
    components: { CountTo },
};
</script>
<template>
    <BCol xl="6">
        <BCard no-body>
            <BCardHeader class="align-items-center d-flex">
                <BCardTitle class="mb-0 flex-grow-1">Sales by Countries</BCardTitle>
                <div class="flex-shrink-0">
                    <BButton type="button" variant="subtle-primary" size="sm">
                        Export Report
                    </BButton>
                </div>
            </BCardHeader>

            <BCardBody>
                <BRow>
                    <BCol lg="8">
                        <div id="chartDiv" style="height: 340px"></div>
                    </BCol>
                    <BCol lg="4">
                        <div class="mb-4">
                            <h6 class="text-muted mb-3 fw-medium fs-xs text-uppercase">Compared to last month</h6>
                            <h3><count-to :startVal="0" :duration="5000" :endVal="53736"></count-to> <small class="text-muted fw-normal fs-sm">Sales</small></h3>
                        </div>
                        <div>
                            <ul class="list-unstyled vstack gap-2">
                                <li class="p-2 rounded">
                                    <i class="ri-checkbox-blank-circle-fill text-primary align-bottom me-1"></i>
                                    United States <span class="float-end">15,364</span>
                                </li>
                                <li class="bg-light-subtle p-2 rounded">
                                    <i class="ri-checkbox-blank-circle-fill text-secondary align-bottom me-1"></i>
                                    Greenland <span class="float-end">12,387</span>
                                </li>
                                <li class="p-2 rounded">
                                    <i class="ri-checkbox-blank-circle-fill text-info align-bottom me-1"></i> Serbia
                                    <span class="float-end">9,123</span>
                                </li>
                                <li class="bg-light-subtle p-2 rounded">
                                    <i class="ri-checkbox-blank-circle-fill text-success align-bottom me-1"></i>
                                    Russia <span class="float-end">7,108</span>
                                </li>
                                <li class="p-2 rounded">
                                    <i class="ri-checkbox-blank-circle-fill text-danger align-bottom me-1"></i>
                                    Brazil <span class="float-end">6,731</span>
                                </li>
                                <li class="bg-light-subtle p-2 rounded">
                                    <i class="ri-checkbox-blank-circle-fill text-warning align-bottom me-1"></i>
                                    Sydney <span class="float-end">3,023</span>
                                </li>
                            </ul>
                        </div>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>
</template>