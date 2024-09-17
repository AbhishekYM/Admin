<script>

export default {
    data() {
        return {
            series: [{
                data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54],
            }],

            chartOptions: {
                chart: {
                    type: "area",
                    height: 43,
                    sparkline: {
                        enabled: true,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100],
                    },
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                colors: this.color,
                tooltip: {
                    fixed: {
                        enabled: false,
                    },
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: false,
                    },
                },
            }
        }
    },
    props: {
        color: {
            type: String,
            defalut: ''
        }
    }
}

</script>

<template>
    <apexchart class="apex-charts" height="43" dir="ltr" :series="series" :options="chartOptions">
    </apexchart>
</template>