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

// const tab = getChartColorsArray('["--tb-primary", "--tb-secondary"]')

const revenueChart = {
    series: [{
        name: 'Earning',
        data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
    }, {
        name: 'Expense',
        data: [-10, -17.32, -15.45, -12.30, -19.15, -15.45, -11, -14.32, -15.67, -10, -17.32, -19.2]
    }],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 328,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 5,
            colors: "#000",
            lineCap: 'round',
        },
        grid: {
            show: true,
            borderColor: '#000',

            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '30%',
                borderRadius: 5,
                lineCap: 'round',
                borderRadiusOnAllStackedSeries: true

            },
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
            textAnchor: 'top',
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function (y) {
                    return y.toFixed(0) + "k";
                }
            },
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                rotate: -90
            },
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                stroke: {
                    width: 1
                },
            },
        }
    },
};

const budgetChart = {
    series: [{
        data: [50, 15, 35, 62, 23, 56, 44, 12]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 45,
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
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
};

const payoutsChart = {
    series: [{
        data: [50, 15, 20, 34, 23, 56, 65, 41]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 45,
            sparkline: {
                enabled: true
            }

        },
        colors: getChartColorsArray('["--tb-info"]'),
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
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
};

const trafficSourceChart = {
    series: [{
        name: 'Search Engine Traffic',
        data: [74, 83, 102, 97]
    }, {
        name: 'Direct Traffic',
        data: [46, 57, 59, 54]
    }],
    chartOptions: {
        chart: {
            height: 360,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['transparent']
        },
        legend: {
            show: true,
            position: 'top',
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-light"]'),
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May'],
        },
        yaxis: {
            show: false,
        },
        grid: {
            borderColor: '#f1f1f1',
        },
    },
};

export { revenueChart, budgetChart, payoutsChart, trafficSourceChart };