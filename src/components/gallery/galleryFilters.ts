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
        const HtmlElementBrandsWrapper = this.createBrandFilter();
        const HtmlElementCategoriesWrapper = this.createCategoryFilter();
        const HtmlElementPriceSlider = this.createSliderFilter('price', 'price');
        const HtmlElementInStockSlider = this.createSliderFilter('stock', 'stock');
        HtmlElement.classList.add('gallery-filters-wrapper');
        HtmlElement.appendChild(HtmlElementButtons);
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
        return this.filteredResponses;
    }

    private createFilterButtons(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-buttons-wrapper');
        const buttonClearFiltersElement = document.createElement('button');
        buttonClearFiltersElement.classList.add('filters-button', 'filters-button-clear');
        buttonClearFiltersElement.textContent = 'Reset filters';
        buttonClearFiltersElement.onclick = () => {
            this.query = {};
            GalleryInstance.showData(this.processQuery());
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

    private createBrandFilter(): HTMLElement {
        const HtmlElementBrandsWrapper = document.createElement('ul');
        const brandArr: Array<string> = [];
        response.products.forEach((productsResponse) => {
            brandArr.push(productsResponse.brand);
        });
        brandArr.sort((item1, item2) => {
            return item1.localeCompare(item2);
        });
        const brandSet: Set<string> = new Set(brandArr);
        brandSet.forEach((brand) => {
            HtmlElementBrandsWrapper.appendChild(this.createCheckboxFilter('brand', brand, 'brands', 'brand'));
        });
        HtmlElementBrandsWrapper.classList.add('filters-brands-wrapper');
        HtmlElementBrandsWrapper.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            const brandArr: Array<string> = [];
            response.products.forEach((productsResponse) => {
                brandArr.push(productsResponse.brand);
            });
            brandArr.sort((item1, item2) => {
                return item1.localeCompare(item2);
            });
            const brandSet: Set<string> = new Set(brandArr);
            brandSet.forEach((brand) => {
                if (
                    !Array.from(HtmlElementBrandsWrapper.children).some(
                        (element) => element.getAttribute('brand') === brand
                    )
                )
                    HtmlElementBrandsWrapper.appendChild(this.createCheckboxFilter('brand', brand, 'brands', 'brand'));
            });
            HtmlElementBrandsWrapper.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElementBrandsWrapper;
    }

    private createCategoryFilter(): HTMLElement {
        const HtmlElement = document.createElement('ul');
        const categoryArr: Array<string> = [];
        response.products.forEach((productsResponse) => {
            categoryArr.push(productsResponse.category);
        });
        categoryArr.sort((item1, item2) => {
            return item1.localeCompare(item2);
        });
        const categorySet: Set<string> = new Set(categoryArr);
        categorySet.forEach((category) => {
            HtmlElement.appendChild(this.createCheckboxFilter('category', category, 'categories', 'category'));
        });
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            const categoryArr: Array<string> = [];
            response.products.forEach((productsResponse) => {
                categoryArr.push(productsResponse.category);
            });
            categoryArr.sort((item1, item2) => {
                return item1.localeCompare(item2);
            });
            const categorySet: Set<string> = new Set(categoryArr);
            categorySet.forEach((category) => {
                if (!Array.from(HtmlElement.children).some((element) => element.getAttribute('category') === category))
                    HtmlElement.appendChild(this.createCheckboxFilter('category', category, 'categories', 'category'));
            });
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        HtmlElement.classList.add('filters-category-wrapper');
        return HtmlElement;
    }

    private createCheckboxFilter(
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
                    GalleryInstance.showData(this.processQuery());
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
        HtmlElement.classList.add('filter-slider-wrapper');
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
            GalleryInstance.showData(this.processQuery());
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
            GalleryInstance.showData(this.processQuery());
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
            if (Array.isArray(this.query[queryField]) && this.query[queryField]?.length === 2) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                fromInputSlider.value = `${this.query[queryField]![0]}`;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                toInputSlider.value = `${this.query[queryField]![1]}`;
            } else {
                fromInputSlider.value = fromInputSlider.min;
                toInputSlider.value = toInputSlider.max;
            }
            minValueElement.textContent = fromInputSlider.value;
            maxValueElement.textContent = toInputSlider.value;
            fillSlider(fromInputSlider, toInputSlider, '#C6C6C6', '#25daa5', toInputSlider);
        });
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
