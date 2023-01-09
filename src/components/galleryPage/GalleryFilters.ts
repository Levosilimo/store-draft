import { IFiltersQuery, IProductsResponse } from '../../types';
import { GalleryInstance, isCustomEvent, response, router } from '../../index';
import { controlFromSlider, controlToSlider, fillSlider, setToggleAccessible } from './sliderView';

export default class GalleryFilters {
    HtmlElementInstance: HTMLElement;
    private query: IFiltersQuery = router.query;
    filteredResponses: IProductsResponse[] = response.products;
    constructor() {
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        const HtmlElementButtons = this.createFilterButtons();
        const HtmlElementSearch = this.createSearchFilter();
        const HtmlElementBrandsWrapper = this.createCheckboxFilter('brand', 'brands', 'brand');
        const HtmlElementCategoriesWrapper = this.createCheckboxFilter('category', 'categories', 'category');
        const HtmlElementPriceSlider = this.createSliderFilter('price', 'price');
        const HtmlElementInStockSlider = this.createSliderFilter('stock', 'stock');
        HtmlElement.classList.add('gallery-filters-wrapper');
        HtmlElement.appendChild(HtmlElementButtons);
        HtmlElement.appendChild(HtmlElementSearch);
        HtmlElement.appendChild(HtmlElementBrandsWrapper);
        HtmlElement.appendChild(HtmlElementCategoriesWrapper);
        HtmlElement.appendChild(HtmlElementPriceSlider);
        HtmlElement.appendChild(HtmlElementInStockSlider);
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            this.query = router.query;
            this.filteredResponses = e.detail.productResponses;
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElement;
    }

    private processQuery(): IProductsResponse[] {
        this.filteredResponses = router.changeQuery(this.query);
        return GalleryInstance.showData(this.filteredResponses);
    }

    private createFilterButtons(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-buttons-wrapper');
        const buttonClearFiltersElement = document.createElement('button');
        buttonClearFiltersElement.classList.add('filters-button', 'filters-button-clear');
        buttonClearFiltersElement.textContent = 'Reset filters';
        buttonClearFiltersElement.onclick = () => {
            this.query = {};
            this.processQuery();
        };
        const buttonCopyLinkElement = document.createElement('button');
        buttonCopyLinkElement.textContent = 'Copy link';
        buttonCopyLinkElement.onclick = () => {
            navigator.clipboard.writeText(window.location.href);
            buttonCopyLinkElement.textContent = 'Copied!';
            buttonCopyLinkElement.classList.add('activated');
            setTimeout(() => {
                buttonCopyLinkElement.textContent = 'Copy link';
                buttonCopyLinkElement.classList.remove('activated');
            }, 1000);
        };
        buttonCopyLinkElement.classList.add('filters-button', 'filters-button-copy');
        HtmlElement.append(buttonClearFiltersElement, buttonCopyLinkElement);
        return HtmlElement;
    }

    private createSearchFilter(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-search-wrapper');
        const searchInputElement = document.createElement('input');
        searchInputElement.type = 'text';
        searchInputElement.placeholder = 'Search for products...';
        searchInputElement.title = "Type in any info about the product you're looking for";
        searchInputElement.onkeyup = () => {
            this.query.search = searchInputElement.value.trim().toLowerCase();
            this.processQuery();
        };
        //webpack adds ruining slash in css =(
        searchInputElement.style.backgroundImage = 'url(assets/loupe.svg)';
        HtmlElement.append(searchInputElement);
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            searchInputElement.value = router.query.search ?? '';
        });
        return HtmlElement;
    }

    private createCheckboxFilter(
        attributeName: string,
        queryField: 'brands' | 'categories',
        productField: 'brand' | 'category'
    ) {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-checkbox-wrapper');
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        const naming = document.createElement('h3');
        naming.textContent = productField.charAt(0).toUpperCase() + productField.slice(1);
        HtmlElement.append(naming);
        const checkboxListElement = document.createElement('ul');
        const propertyArray: Array<string> = [];
        response.products.forEach((productsResponse) => {
            propertyArray.push(productsResponse[productField]);
        });
        propertyArray.sort((item1, item2) => {
            return item1.localeCompare(item2);
        });
        const propertySet: Set<string> = new Set(propertyArray);
        propertySet.forEach((property) => {
            checkboxListElement.appendChild(
                this.createCheckboxElement(attributeName, property, queryField, productField)
            );
        });

        checkboxListElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            const propertyArray: Array<string> = [];
            response.products.forEach((productsResponse) => {
                propertyArray.push(productsResponse[productField]);
            });
            propertyArray.sort((item1, item2) => {
                return item1.localeCompare(item2);
            });
            const propertySet: Set<string> = new Set(propertyArray);
            propertySet.forEach((property) => {
                if (
                    !Array.from(checkboxListElement.children).some(
                        (element) => element.getAttribute(attributeName) === property
                    )
                )
                    checkboxListElement.appendChild(
                        this.createCheckboxElement(attributeName, property, queryField, productField)
                    );
            });
            checkboxListElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        checkboxListElement.classList.add('filters-checkbox-list');
        HtmlElement.append(checkboxListElement);
        return HtmlElement;
    }

    private createCheckboxElement(
        attributeName: string,
        attributeValue: string,
        queryField: 'brands' | 'categories',
        productField: keyof IProductsResponse
    ): HTMLElement {
        const HtmlElement = document.createElement('li');
        const quantityAll = response.products.reduce((accumulator, product) => {
            if (product[productField] === attributeValue) accumulator++;
            return accumulator;
        }, 0);
        const quantityFiltered = this.filteredResponses.reduce((accumulator, product) => {
            if (product[productField] === attributeValue) accumulator++;
            return accumulator;
        }, 0);
        HtmlElement.textContent = `${attributeValue} (${quantityFiltered}/${quantityAll})`;
        HtmlElement.setAttribute(attributeName, attributeValue);
        if (
            Array.isArray(this.query[queryField]) &&
            this.query[queryField]?.some((element) => element === attributeValue)
        ) {
            HtmlElement.classList.add('checked-filter');
        }
        HtmlElement.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement) {
                const clickedElement = event.target;
                const attribute = clickedElement.getAttribute(attributeName);
                if (attribute) {
                    if (!HtmlElement.classList.contains('checked-filter')) {
                        if (!Array.isArray(this.query[queryField])) this.query[queryField] = [attribute];
                        else this.query[queryField]?.push(attribute);
                        HtmlElement.classList.add('checked-filter');
                    } else {
                        HtmlElement.classList.remove('checked-filter');
                        if (Array.isArray(this.query[queryField])) {
                            const index = this.query[queryField]?.indexOf(attribute);
                            if (typeof index !== 'undefined' && index > -1) {
                                this.query[queryField]?.splice(index, 1);
                            }
                            if (this.query[queryField]?.length === 0) delete this.query[queryField];
                        }
                    }
                    this.processQuery();
                }
            }
        });
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            const quantityAll = response.products.reduce((accumulator, product) => {
                if (product[productField] === attributeValue) accumulator++;
                return accumulator;
            }, 0);
            const quantityFiltered = this.filteredResponses.reduce((accumulator, product) => {
                if (product[productField] === attributeValue) accumulator++;
                return accumulator;
            }, 0);
            HtmlElement.textContent = `${attributeValue} (${quantityFiltered}/${quantityAll})`;
            if (quantityFiltered === 0) HtmlElement.classList.add('filter-deactivated');
            else HtmlElement.classList.remove('filter-deactivated');
            this.query = router.query;
            if (
                Array.isArray(this.query[queryField]) &&
                this.query[queryField]?.some((element) => element === attributeValue)
            ) {
                HtmlElement.classList.add('checked-filter');
            } else HtmlElement.classList.remove('checked-filter');
        });
        return HtmlElement;
    }

    private createSliderFilter(queryField: 'price' | 'stock', productField: keyof IProductsResponse): HTMLElement {
        const HtmlElement = document.createElement('div');
        const naming = document.createElement('h3');
        naming.textContent = productField.charAt(0).toUpperCase() + productField.slice(1);
        HtmlElement.classList.add('filter-slider-wrapper');
        HtmlElement.append(naming);
        const sliderWrapper = document.createElement('div');
        sliderWrapper.classList.add('filter-slider-range-wrapper');
        const fromInputSlider = document.createElement('input');
        fromInputSlider.type = 'range';
        const fieldArray: Array<number> = [];
        this.filteredResponses.forEach((product) => {
            const property = product[productField];
            if (typeof property === 'number') fieldArray.push(property);
        });
        fromInputSlider.min = `${Math.min(...fieldArray)}`;
        fromInputSlider.max = `${Math.max(...fieldArray)}`;
        if (Array.isArray(this.query[queryField]) && this.query[queryField]?.length === 2)
            // if-statement guarantees that this.query[queryField] !== null
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            fromInputSlider.value = `${this.query[queryField]![0]}`;
        else fromInputSlider.value = `${Math.min(...fieldArray)}`;
        fromInputSlider.style.height = '0';
        fromInputSlider.style.zIndex = '1';
        const toInputSlider = document.createElement('input');
        toInputSlider.type = 'range';
        toInputSlider.min = `${Math.min(...fieldArray)}`;
        toInputSlider.max = `${Math.max(...fieldArray)}`;
        if (Array.isArray(this.query[queryField]) && this.query[queryField]?.length === 2)
            // if-statement guarantees that this.query[queryField] !== null
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            toInputSlider.value = `${this.query[queryField]![1]}`;
        else toInputSlider.value = `${Math.max(...fieldArray)}`;
        sliderWrapper.append(fromInputSlider, toInputSlider);
        const formWrapper = document.createElement('div');
        const minValueElement = document.createElement('div');
        minValueElement.textContent = fromInputSlider.value;
        minValueElement.classList.add('filter-slider-form-text');
        const maxValueElement = document.createElement('div');
        maxValueElement.textContent = toInputSlider.value;
        maxValueElement.classList.add('filter-slider-form-text');
        formWrapper.append(minValueElement, maxValueElement);
        fromInputSlider.oninput = () => {
            controlFromSlider(fromInputSlider, toInputSlider, minValueElement);
            if (
                !Array.isArray(this.query[queryField]) ||
                (Array.isArray(this.query[queryField]) && this.query[queryField]?.length !== 2)
            )
                this.query[queryField] = [fromInputSlider.value, toInputSlider.value];
            else if (Array.isArray(this.query[queryField]) && this.query[queryField]?.length === 2)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                this.query[queryField]![0] = fromInputSlider.value;
            if (
                this.query[queryField]?.[0] === fromInputSlider.min &&
                this.query[queryField]?.[1] === fromInputSlider.max
            )
                delete this.query[queryField];
            this.processQuery();
        };
        toInputSlider.oninput = () => {
            controlToSlider(fromInputSlider, toInputSlider, maxValueElement);
            if (
                !Array.isArray(this.query[queryField]) ||
                (Array.isArray(this.query[queryField]) && this.query[queryField]?.length !== 2)
            )
                this.query[queryField] = [fromInputSlider.value, toInputSlider.value];
            else if (Array.isArray(this.query[queryField]) && this.query[queryField]?.length === 2)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                this.query[queryField]![1] = toInputSlider.value;
            if (this.query[queryField]?.[0] === toInputSlider.min && this.query[queryField]?.[1] === toInputSlider.max)
                delete this.query[queryField];
            this.processQuery();
        };
        fillSlider(fromInputSlider, toInputSlider, '#C6C6C6', '#25daa5', toInputSlider);
        setToggleAccessible(toInputSlider);
        formWrapper.classList.add('filter-slider-form-wrapper');
        HtmlElement.append(sliderWrapper, formWrapper);
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            const fieldArray: Array<number> = [];
            response.products.forEach((product) => {
                const property = product[productField];
                if (typeof property === 'number') fieldArray.push(property);
            });
            fromInputSlider.min = `${Math.min(...fieldArray)}`;
            fromInputSlider.max = `${Math.max(...fieldArray)}`;
            toInputSlider.min = `${Math.min(...fieldArray)}`;
            toInputSlider.max = `${Math.max(...fieldArray)}`;

            const filteredFieldArray: Array<number> = [];
            this.filteredResponses.forEach((product) => {
                const property = product[productField];
                if (typeof property === 'number') filteredFieldArray.push(property);
            });
            if (this.filteredResponses.length === 0) return;
            if (
                !(
                    fromInputSlider.value === `${Math.min(...filteredFieldArray)}` &&
                    toInputSlider.value === `${Math.max(...filteredFieldArray)}`
                )
            ) {
                fromInputSlider.value = `${Math.min(...filteredFieldArray)}`;
                toInputSlider.value = `${Math.max(...filteredFieldArray)}`;
            }
            minValueElement.textContent = fromInputSlider.value;
            maxValueElement.textContent = toInputSlider.value;
            fillSlider(fromInputSlider, toInputSlider, '#C6C6C6', '#25daa5', toInputSlider);
        });
        return HtmlElement;
    }
}
