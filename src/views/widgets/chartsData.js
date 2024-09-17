export function getChartColorsArray(colors) {
    colors = JSON.parse(colors);
    return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color) {
                color = color.replace(" ", "");
                return color;
            }
            else return newValue;
        } else {
            var val = value.split(',');
            if (val.length == 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
}

const totalSessionsChart = {
    series: [{
        name: 'Total Sessions',
        data: [31, 40, 28, 51, 42, 109, 103]
    }],
    chartOptions: {
        chart: {
            height: 124,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            labels: {
                style: {
                    fontSize: '10px',
                },
            }
        },
        yaxis: {
            show: false,
        },
    },
};

const avgVisitDurationChart = {
    series: [{
        name: 'Avg. Visit Duration',
        data: [29, 43, 71, 58, 99, 93, 130]
    }],
    chartOptions: {
        chart: {
            height: 124,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            labels: {
                style: {
                    fontSize: '10px',
                },
            }
        },
        yaxis: {
            show: false,
        },
    },
};

const impressionsChart = {
    series: [{
        name: 'Impressions',
        data: [50, 18, 47, 32, 84, 110, 93]
    }],
    chartOptions: {
        chart: {
            height: 124,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: getChartColorsArray('["--tb-secondary"]'),
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            labels: {
                style: {
                    fontSize: '10px',
                },
            }
        },
        yaxis: {
            show: false,
        },
    },
};

const totalViewsChart = {
    series: [{
        name: 'Total Views',
        data: [72, 58, 30, 51, 42, 95, 119]
    }],
    chartOptions: {
        chart: {
            height: 124,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: getChartColorsArray('["--tb-primary"]'),
        xaxis: {
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            labels: {
                style: {
                    fontSize: '10px',
                },
            }
        },
        yaxis: {
            show: false,
        },
    },
};

const projectOnHoldChart = {
    series: [{
        data: [50, 15, 35, 62, 23, 56, 44, 12]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: getChartColorsArray('["--tb-secondary"]'),
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
};

const ongoingPropertiesChart = {
    series: [{
        data: [50, 15, 20, 34, 23, 56, 65, 75]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: getChartColorsArray('["--tb-primary"]'),
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
};

const pendingPropertiesChart = {
    series: [{
        data: [32, 18, 29, 31, 46, 33, 39, 46]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: getChartColorsArray('["--tb-warning"]'),
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
};

const completedProjectChart = {
    series: [{
        data: [36, 25, 18, 34, 39, 30, 34, 42]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 50,
            sparkline: {
                enabled: true
            }

        },
        colors: getChartColorsArray('["--tb-success"]'),
        stroke: {
            curve: 'smooth',
            width: 1,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }
};

const salesReportChart = {
    series: [{
        name: 'This Month',
        data: [45, 74, 36, 69, 84, 110, 92]
    }, {
        name: 'Last Month',
        data: [11, 18, 20, 32, 46, 65, 73]
    }],
    chartOptions: {
        chart: {
            height: 333,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 2,
                bottom: 0,
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            offsetY: "-50px",
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.4,
                opacityTo: 0,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'stepline',
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
        xaxis: {
            type: 'datetime',
            categories: ["02/01/2023 GMT", "02/02/2023 GMT", "02/03/2023 GMT", "02/04/2023 GMT", "02/05/2023 GMT", "02/06/2023 GMT", "02/07/2023 GMT"]
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function (y) {
                    return y.toFixed(0) + "k";
                }
            },
        },
    },
};

const realizedRateChart = {
    series: [{
        name: 'Read',
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: 'Delivery',
        data: [20, 30, 40, 80, 20, 80],
    },
    {
        name: 'Failed',
        data: [44, 76, 78, 13, 43, 10],
    }
    ],
    chartOptions: {
        chart: {
            height: 360,
            type: 'radar',
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 1
        },
        fill: {
            opacity: 0.2
        },
        markers: {
            size: 3,
            hover: {
                size: 4,
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-secondary", "--tb-danger"]'),
        xaxis: {
            categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
        }
    },
};

const emailSentChart = {
    series: [63, 87, 33],
    chartOptions: {

        chart: {
            height: 390,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: getChartColorsArray('["--tb-primary", "--tb-success", "--tb-secondary"]'),
                    opacity: 0.15,
                },
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function () {
                            return 1793
                        }
                    }
                },
            }
        },
        legend: {
            show: true,
            position: 'bottom',
        },
        labels: ['Sent', 'Received', 'Failed'],
        colors: getChartColorsArray('["--tb-primary", "--tb-success", "--tb-secondary"]'),
    },
};

const syncStatusBreakdownChart = {
    series: [{
        name: 'Synced',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Sync Needed',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Never Synced',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Review Needed',
        data: [9, 7, 5, 8, 6, 9, 4]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnHight: '40%',
            },
        },
        grid: {
            show: true,
            padding: {
                top: -20,
                right: 0,
                bottom: -10,
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false,
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-primary-rgb, 0.85", "--tb-primary-rgb, 0.60", "--tb-primary-rgb, 0.50", "--tb-info"]')
    },
};

export { salesReportChart, realizedRateChart, emailSentChart, syncStatusBreakdownChart, totalSessionsChart, avgVisitDurationChart, impressionsChart, totalViewsChart, projectOnHoldChart, ongoingPropertiesChart, pendingPropertiesChart, completedProjectChart };