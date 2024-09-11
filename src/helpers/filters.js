const NumberType = [
    "Int16",
    "Float32",
    "Int32"
]
const DateType = ['DateTime']
const StringType = ['String']

export function setupFilters(keySelector, categories, data, selectedCategory, onChange) {
    const select = document.getElementById(keySelector);
    const uniqueCategories = [...new Set(categories.map(item => item.name))];

    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.innerText = category;
        option.selected = selectedCategory === category
        select.appendChild(option);
    });
    select.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        onChange(data, categories, selectedCategory);
        updateUrl(selectedCategory);
    });
}

export function updateUrl(category) {
    const url = new URL(window.location);
    url.searchParams.set('category', category);
    window.history.pushState({}, '', url);
}

export function getTypeFilter(selectedCategory) {
    if (NumberType.includes(selectedCategory)) {
        return 'NumberType'
    }
    if (DateType.includes(selectedCategory)) {
        return 'DateType'
    }
    if (StringType.includes(selectedCategory)) {
        return 'StringType'
    }

    return 'NoType'
}