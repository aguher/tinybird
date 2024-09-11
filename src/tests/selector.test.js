import { KEY_SELECT_ELEMENT } from "..";
import { setupFilters } from "../helpers/filters";
import { DataFixtures, MetaFixtures } from "./fixtures";

describe('Select element test', () => {
    let selectElement;
    const onRenderChart = jest.fn()
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="filter-container">
                <label for="categoryFilter">Filter by Category: </label>
                <select id="categoryFilter"></select>
            </div>
      `;

        setupFilters(KEY_SELECT_ELEMENT, MetaFixtures, DataFixtures, 'vendorid', onRenderChart);
        selectElement = document.getElementById(KEY_SELECT_ELEMENT);

    });

    it('should have the correct number of options', () => {
        expect(selectElement.options.length).toBe(17);
    });

    it('should have the correct values for each option', () => {

        expect(selectElement.options[0].value).toBe('vendorid');
        expect(selectElement.options[1].value).toBe('tpep_pickup_datetime');
        expect(selectElement.options[2].value).toBe('tpep_dropoff_datetime');
        expect(selectElement.options[3].value).toBe('passenger_count');
        expect(selectElement.options[4].value).toBe('trip_distance');
        expect(selectElement.options[5].value).toBe('ratecodeid');
        expect(selectElement.options[6].value).toBe('store_and_fwd_flag');
        expect(selectElement.options[7].value).toBe('pulocationid');
        expect(selectElement.options[8].value).toBe('dolocationid');
        expect(selectElement.options[9].value).toBe('payment_type');
        expect(selectElement.options[10].value).toBe('fare_amount');
        expect(selectElement.options[11].value).toBe('extra');
        expect(selectElement.options[12].value).toBe('mta_tax');
        expect(selectElement.options[13].value).toBe('tip_amount');
        expect(selectElement.options[14].value).toBe('tolls_amount');
        expect(selectElement.options[15].value).toBe('improvement_surcharge');
        expect(selectElement.options[16].value).toBe('total_amount');
    });

    it('should allow selecting an option and call to onRender method', () => {
        selectElement.value = 'improvement_surcharge';
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
        expect(selectElement.value).toBe('improvement_surcharge');
        expect(onRenderChart).toHaveBeenCalledTimes(1);
    });
});
