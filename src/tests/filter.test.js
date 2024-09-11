import { getTypeFilter, updateUrl } from "../helpers/filters";


describe('Should return NumberType type for numbers categories', () => {
    test('should get NumberType with category Int16', () => {
        const filteredData = getTypeFilter('Int16');
        expect(filteredData).toEqual('NumberType');
    });
    test('should get NumberType with category Int16', () => {
        const filteredData = getTypeFilter('Int16');
        expect(filteredData).toEqual('NumberType');
    });
    test('should get NumberType with category Float32', () => {
        const filteredData = getTypeFilter('Float32');
        expect(filteredData).toEqual('NumberType');
    });
})


describe('Should return DateType type for Date categories', () => {
    test('should get DateType with category DateTime', () => {
        const filteredData = getTypeFilter('DateTime');
        expect(filteredData).toEqual('DateType');
    });
})

describe('Should return StringType type for string categories', () => {
    test('should get StringType with category String', () => {
        const filteredData = getTypeFilter('String');
        expect(filteredData).toEqual('StringType');
    });
})

describe('Should return NoType type for others categories', () => {
    test('should get NoType with no category', () => {
        const filteredData = getTypeFilter('other');
        expect(filteredData).toEqual('NoType');
    });
})

test('Should update the url of browser', () => {
    const newCategory = 'new-category';
    const updatedUrl = '?category=new-category'
    updateUrl(newCategory);

    expect(window.location.href.indexOf(decodeURIComponent(updatedUrl)) > 0).toBe(true);

})
