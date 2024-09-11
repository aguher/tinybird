import { KEY_SELECT_ELEMENT } from "..";
import { renderStringTable } from "../helpers/displays";
import { setupFilters } from "../helpers/filters";
import { DataFixtures, MetaFixtures } from "./fixtures";
const KEY_CATEGORY = 'store_and_fwd_flag'

describe('Render a table with the correct elements', () => {
    const onRenderChart = jest.fn()

    beforeEach(() => {
        document.body.innerHTML = `
        <div>
            <div id="filter-container">
                <label for="categoryFilter">Filter by Category: </label>
                <select id="categoryFilter"></select>
            </div>
            <div id="table-layer">
                <table id="stringTable">
                    <thead id="table-head"></thead>
                    <tbody id="table-body"></tbody>
                </table>
            </div>
        </div>
      `;

        setupFilters(KEY_SELECT_ELEMENT, MetaFixtures, DataFixtures, KEY_CATEGORY, onRenderChart);
        //  selectElement = document.getElementById(KEY_SELECT_ELEMENT);

    });
    test('Should show a table with the data', () => {
        renderStringTable(DataFixtures, KEY_CATEGORY)
        const header = document.querySelector('span.title-header');
        const bodyTable = document.getElementById('table-body')
        expect(header).not.toBeNull();
        expect(header.textContent).toBe(KEY_CATEGORY)

        expect(bodyTable.innerHTML).toBe('<tr><td>N</td></tr><tr><td>S</td></tr>')
    })
})