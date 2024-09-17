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

const studentActivityChart = {
    series: [{
        name: "Active Students",
        data: [3, 6, 2, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 64, 55, 49, 69, 78, 73, 69, 83]
    }, {
        name: "New Enrollment",
        data: [10, 16, 25, 14, 29, 33, 47, 53, 41, 55, 63, 53, 66, 71, 79, 70, 73, 84, 92, 83, 96, 93, 101, 109, 99, 87, 93, 107]
    }],
    chartOptions: {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 4
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]'),
        xaxis: {
            type: 'datetime',
            categories: ['02/01/2023 GMT', '02/02/2023 GMT', '02/03/2023 GMT', '02/04/2023 GMT',
                '02/05/2023 GMT', '02/06/2023 GMT', '02/07/2023 GMT', '02/08/2023 GMT', '02/09/2023 GMT', '02/10/2023 GMT', '02/11/2023 GMT', '02/12/2023 GMT', '02/13/2023 GMT',
                '02/14/2023 GMT', '02/15/2023 GMT', '02/16/2023 GMT', '02/17/2023 GMT', '02/18/2023 GMT', '02/19/2023 GMT', '02/20/2023 GMT', '02/21/2023 GMT', '02/22/2023 GMT',
                '02/23/2023 GMT', '02/24/2023 GMT', '02/25/2023 GMT', '02/26/2023 GMT', '02/27/2023 GMT', '02/28/2023 GMT'
            ]
        }
    }
};

const totalInstructorsChart = {
    series: [84],
    chartOptions: {
        chart: {
            height: 170,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%'
                },
                track: {
                    margin: 0,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Instructor Total'],
        colors: getChartColorsArray('["--tb-primary"]')
    }
};

const totalCoursesChart = {
    series: [33],
    chartOptions: {
        chart: {
            height: 170,
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '75%'
                },
                track: {
                    margin: 0,
                },
                dataLabels: {
                    show: false
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Instructor Total'],
        colors: getChartColorsArray('["--tb-secondary"]')
    }
};

const instructorActivityChart = {
    series: [{
        name: "New Orders",
        data: [32, 18, 13, 17, 26, 34, 47, 51, 59, 63, 44, 38, 53, 69, 72, 83, 90, 110, 130, 117, 103, 92, 95, 119, 80, 96, 116, 125]
    }, {
        name: "Return Orders",
        data: [3, 6, 2, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 70, 55, 49, 36, 30, 52, 38, 33]
    }],
    chartOptions: {
        chart: {
            height: 190,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
            position: 'top',
            horizontalAlign: 'right',
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 4
            }
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-light", "--tb-secondary"]'),
        xaxis: {
            type: 'datetime',
            categories: ['02/01/2023 GMT', '02/02/2023 GMT', '02/03/2023 GMT', '02/04/2023 GMT',
                '02/05/2023 GMT', '02/06/2023 GMT', '02/07/2023 GMT', '02/08/2023 GMT', '02/09/2023 GMT', '02/10/2023 GMT', '02/11/2023 GMT', '02/12/2023 GMT', '02/13/2023 GMT',
                '02/14/2023 GMT', '02/15/2023 GMT', '02/16/2023 GMT', '02/17/2023 GMT', '02/18/2023 GMT', '02/19/2023 GMT', '02/20/2023 GMT', '02/21/2023 GMT', '02/22/2023 GMT',
                '02/23/2023 GMT', '02/24/2023 GMT', '02/25/2023 GMT', '02/26/2023 GMT', '02/27/2023 GMT', '02/28/2023 GMT'
            ]
        },
        yaxis: {
            show: false,
        }
    }
};

export { studentActivityChart, totalInstructorsChart, totalCoursesChart, instructorActivityChart };