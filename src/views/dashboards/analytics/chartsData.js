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

const pageViewChart = {
    series: [{
        name: 'Website',
        data: [12, 14.65, 28.24, 25.02, 19.65, 23, 21.18, 23.65, 20.32, 18, 12.65, 28.32]
    },
    {
        name: 'Social Media',
        data: [26, 24.65, 18.24, 29.02, 23.65, 27, 21.18, 24.65, 27.32, 25, 24.65, 29.32]
    },
    {
        name: 'Others',
        data: [-10, -17.32, -15.45, -12.30, -19.15, -15.45, -11, -14.32, -15.67, -10, -17.32, -19.2]
    }
    ],
    chartOptions: {
        chart: {
            type: 'bar',
            height: 373,
            stacked: true,
            toolbar: {
                show: false
            },
            redrawOnWindowResize: true,
            redrawOnParentResize: true,
        },
        stroke: {
            width: 5,
            colors: "#000",
            lineCap: 'round',
        },
        plotOptions: {
            bar: {
                columnWidth: '25%',
                borderRadius: 5,
                lineCap: 'round',
                borderRadiusOnAllStackedSeries: true

            },
        },
        colors: getChartColorsArray('["--tb-light", "--tb-primary", "--tb-secondary"]'),
        fill: {
            opacity: 1
        },
        dataLabels: {
            enabled: false,
            textAnchor: 'top',
        },
        legend: {
            show: true,
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
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '50px',
                        }
                    },
                }
            },
            {
                breakpoint: 600,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '70px',
                        }
                    },
                }
            }
        ]
    },
};

const clicksChart = {
    series: [{
        name: 'Website',
        data: [21, 10, 12, 8, 18, 29, 16, 20, 36, 22, 29, 16]
    }, {
        name: 'Ads Clicks',
        data: [10, 29, 16, 13, 33, 24, 39, 46, 40, 35, 49, 41]
    }, {
        name: 'Social Media',
        data: [26, 17, 34, 15, 21, 14, 8, 33, 26, 45, 32, 57]
    }],
    chartOptions: {
        chart: {
            type: 'line',
            height: 373,
            zoom: {
                enabled: true
            },
            toolbar: {
                show: false,
            }
        },
        stroke: {
            width: 3,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
                '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT', '01/08/2023 GMT', '01/09/2023 GMT', '01/10/2023 GMT', '01/11/2023 GMT', '01/12/2023 GMT'
            ],
        },
        legend: {
            position: 'top',
        },
        fill: {
            opacity: 1
        },
        colors: getChartColorsArray('["--tb-light", "--tb-secondary", "--tb-primary"]'),
    },
};

const conversationsChart = {
    series: [{
        data: [30, 57, 25, 33, 20, 39, 47, 36, 22, 51, 38, 27, 38, 49, 42, 58, 33, 46, 40, 34, 41, 53, 19, 23, 36, 52, 58, 43]
    }],
    chartOptions: {
        chart: {
            height: 373,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        colors: getChartColorsArray('["--tb-primary-text-emphasis"]'),
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
                '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT', '01/08/2023 GMT', '01/09/2023 GMT', '01/10/2023 GMT', '01/11/2023 GMT', '01/12/2023 GMT', '01/13/2023 GMT',
                '01/14/2023 GMT', '01/15/2023 GMT', '01/16/2023 GMT', '01/17/2023 GMT', '01/18/2023 GMT', '01/19/2023 GMT', '01/20/2023 GMT', '01/21/2023 GMT', '01/22/2023 GMT',
                '01/23/2023 GMT', '01/24/2023 GMT', '01/25/2023 GMT', '01/26/2023 GMT', '01/27/2023 GMT', '01/28/2023 GMT'
            ],
        },
    },
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

const timeOnSalesChart = {
    series: [70],
    chartOptions: {
        chart: {
            width: 50,
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '45%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true, fontSize: '10px', offsetY: 5,
                    },
                }
            },
        },
        colors: getChartColorsArray('["--tb-primary"]'),
    },
};

const goalCompletionsChart = {
    series: [74.52],
    chartOptions: {
        chart: {
            width: 50,
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '45%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true, fontSize: '10px', offsetY: 5,
                    },
                }
            },
        },
        colors: getChartColorsArray('["--tb-dark"]'),
    },
};

const bounceRateChart = {
    series: [81.32],
    chartOptions: {
        chart: {
            width: 50,
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '45%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true, fontSize: '10px', offsetY: 5,
                    },
                }
            },
        },
        colors: getChartColorsArray('["--tb-danger"]'),
    },
};

const newSessionsChart = {
    series: [94.03],
    chartOptions: {
        chart: {
            width: 50,
            height: 100,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '45%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true, fontSize: '10px', offsetY: 5,
                    },
                }
            },
        },
        colors: getChartColorsArray('["--tb-info"]'),
    },
};

// Bar with Markers
const barMarkersChart = {
    series: [{
      name: "Actual",
      data: [{
        x: "US",
        y: 1200,
      },
      {
        x: "Canada",
        y: 4400,
      },
      {
        x: "Russia",
        y: 5400,
      },
      {
        x: "Serbia",
        y: 6600,
      },
      {
        x: "Brazil",
        y: 8100,
      },
      ],
    },],
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
      colors: getChartColorsArray('["--tb-primary-bg-subtle"]'),
      dataLabels: {
        formatter: function (val, opt) {
          var goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
  
          if (goals && goals.length) {
            return `${val}`;
          }
          return val;
        },
      },
    },
  };

export { pageViewChart, clicksChart, conversationsChart, salesReportChart, totalSessionsChart, avgVisitDurationChart, impressionsChart, totalViewsChart, timeOnSalesChart, goalCompletionsChart, bounceRateChart, newSessionsChart, barMarkersChart };