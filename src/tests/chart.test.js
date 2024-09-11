import Chart from 'chart.js/auto';

import { initializeChart, renderChart } from "../helpers/displays"
import { DataFixtures } from './fixtures';
describe('Show a canvas with a chart', () => {
    let ctx;
    let mockChart;
    beforeEach(() => {
        // Simulamos el contexto del canvas
        ctx = document.createElement('canvas').getContext('2d');

        // Hacemos un espía del constructor Chart
        mockChart = jest.spyOn(Chart.prototype, 'constructor');
    });
    test('Should initialize successfully the chart', () => {
        const instance = initializeChart(ctx)
        const { fill, borderWidth, backgroundColor, borderColor, tension } = instance.config._config.options
        expect(fill).toBe(true)
        expect(borderWidth).toBe('20px')
        expect(backgroundColor).toBe('rgba(255,255,255,0.5)')
        expect(borderColor).toBe('rgba(0, 0, 192, 1)')
        expect(tension).toBe(0.5)
    })

    test('Should add the datasets successfully to the chart', () => {
        const instance = initializeChart(ctx)
        renderChart(instance, 'NumberType', DataFixtures, 'vendorid')
        expect(instance.data.datasets[0].data).toHaveLength(2)
        expect(JSON.stringify(instance.data.labels)).toBe('[2,3]')
    })
})


