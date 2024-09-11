const { initializeChart, renderChart, renderStringTable } = require("./helpers/displays");
const { fetchData } = require("./helpers/fetching");
const { setupFilters, getTypeFilter } = require("./helpers/filters");

let chartInstance;
export const KEY_SELECT_ELEMENT = 'categoryFilter'

function onRenderChart(data, meta, selectedCategory) {
    const metaSelected = selectedCategory ? meta.find(sel => sel.name === selectedCategory) : undefined
    const typeChart = metaSelected ? getTypeFilter(metaSelected.type) : undefined
    if (typeChart === 'DateType' || typeChart === 'NumberType') {
        renderChart(chartInstance, typeChart, data, selectedCategory)
    } else if (typeChart === 'StringType') {
        renderStringTable(data, selectedCategory)
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const params = new URLSearchParams(window.location.search);

    chartInstance = initializeChart()

    const { meta, data } = await fetchData()
    const selectedCategory = params.get('category') ?? meta[0].name


    setupFilters(KEY_SELECT_ELEMENT, meta, data, selectedCategory, onRenderChart);
    onRenderChart(data, meta, selectedCategory);
});
