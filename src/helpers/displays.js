import Chart from 'chart.js/auto';

export const TYPE_CHART = 'Number' | 'Date' | 'String'
const ELEMENT_TABLE = document.getElementById('table-layer')
const ELEMENT_CHART = document.getElementById('chart-layer')

export function initializeChart(context = undefined) {
    let chartInstance
    const ctx = context ?? document.getElementById('myChart');

    chartInstance = new Chart(ctx, {
        options: {
            fill: true,
            borderWidth: '20px',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderColor: 'rgba(0, 0, 192, 1)',
            tension: 0.5,
            scales: {
                y: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false

                }
            }
        },
    })
    return chartInstance
}


export function renderChart(chartInstance, typeChart, data, categoryFilter = null) {
    hideTable()
    if (typeChart) {
        const filteredData = categoryFilter
            ? data.map(value => value[categoryFilter])
            : data;

        if (typeChart === 'DateType') {
            const dateValues = filteredData.map(item => new Date(item).getTime()); // Los valores asociados a cada fecha
            chartInstance.config.type = 'line'
            chartInstance.data.labels = filteredData
            chartInstance.data.datasets = [{
                label: `#${categoryFilter}`,
                data: dateValues,
                borderWidth: 1
            }]
            chartInstance.update()
        } else if (typeChart === 'NumberType') {
            chartInstance.config.type = 'bar'
            chartInstance.data.labels = filteredData
            chartInstance.data.datasets = [{
                label: `#${categoryFilter}`,
                data: filteredData,
                borderWidth: 1
            }]
            chartInstance.update()
        } else if (typeChart === 'StringType') {

        }

    }

}

export function renderStringTable(data, selectedCategory) {
    showTable()
    const tableHead = document.getElementById('table-head');
    const tableBody = document.getElementById('table-body');
    const filteredData = categoryFilter
        ? data.map(value => value[selectedCategory])
        : data;

    tableHead.innerHTML = `<tr><th><span class='title-header'>${selectedCategory}</span><em>String</em></th></tr>`
    tableBody.innerHTML = ''
    filteredData.forEach(item => {
        const row = `<tr><td >${item}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

function hideTable() {
    ELEMENT_TABLE && (ELEMENT_TABLE.style.display = 'none')
    ELEMENT_CHART && (ELEMENT_CHART.style.display = 'block')
}
function showTable() {
    ELEMENT_TABLE && (ELEMENT_TABLE.style.display = 'block')
    ELEMENT_CHART && (ELEMENT_CHART.style.display = 'none')

}