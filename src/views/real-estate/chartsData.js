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

const realEstateEarningsChart = {
    series: [{
        name: "Daily Earning",
        data: [32, 43, 48, 35, 26, 34, 47, 51, 59, 63, 44, 38, 53, 69, 72, 83, 90, 110, 130, 117, 111, 97, 89, 119, 80, 96, 116, 124]
    }, {
        name: "Expenses",
        data: [15, 35, 18, 4, 7, 9, 15, 10, 19, 22, 27, 21, 34, 23, 29, 32, 41, 34, 29, 37, 70, 55, 49, 37, 21, 54, 36, 45]
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
        colors: getChartColorsArray('["--tb-primary", "--tb-danger"]'),
        xaxis: {
            type: 'datetime',
            categories: ['03/01/2023 GMT', '03/02/2023 GMT', '03/03/2023 GMT', '03/04/2023 GMT',
                '03/05/2023 GMT', '03/06/2023 GMT', '03/07/2023 GMT', '03/08/2023 GMT', '03/09/2023 GMT', '03/10/2023 GMT', '03/11/2023 GMT', '03/12/2023 GMT', '03/13/2023 GMT',
                '03/14/2023 GMT', '03/15/2023 GMT', '03/16/2023 GMT', '03/17/2023 GMT', '03/18/2023 GMT', '03/19/2023 GMT', '03/20/2023 GMT', '03/21/2023 GMT', '03/22/2023 GMT',
                '03/23/2023 GMT', '03/24/2023 GMT', '03/25/2023 GMT', '03/26/2023 GMT', '03/27/2023 GMT', '03/28/2023 GMT'
            ]
        },
        yaxis: {
            show: false,
        }
    }
};

const agentOverviewChart = {
    series: [{
        name: 'Total Property',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21, 37, 23, 11, 22]
    }, {
        name: 'Property Rent',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 45, 64, 44, 55, 41]
    }, {
        name: 'Property Sold',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 25, 21, 30, 25, 36]
    }],
    chartOptions: {
        chart: {
            height: 400,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            }
        },
        stroke: {
            width: [0, 2, 3],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '25%'
            }
        },
        fill: {
            opacity: [1, 0.08, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
        },
        labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022',
            '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022', '01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        colors: getChartColorsArray('["--tb-primary", "--tb-light", "--tb-secondary"]')
    }
};
export { realEstateEarningsChart, agentOverviewChart };