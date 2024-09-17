const storageDetailsChart = {
    series: [44, 55, 41, 17, 15],
    chartOptions: {
        chart: {
            type: 'donut',
            width: 270,
            height: 350,
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            position: 'bottom'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
};

export { storageDetailsChart };