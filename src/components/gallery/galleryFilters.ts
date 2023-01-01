import { IFiltersQuery, IProductsResponse } from '../../types';
import { GalleryInstance, response, router } from '../../index';
import { controlFromSlider, controlToSlider, fillSlider, setToggleAccessible } from './sliderView';

export default class GalleryFilters {
    HtmlElementInstance: HTMLElement;
    private query: IFiltersQuery = router.query;
    filteredResponses: IProductsResponse[] = response.products;
    constructor() {
        this.HtmlElementInstance = this.createHtmlElement();
        this.filteredResponses = this.processQuery();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        const HtmlElementBrandsWrapper = this.createBrandFilter();
        const HtmlElementCategoriesWrapper = this.createCategoryFilter();
        const HtmlElementPriceSlider = this.createSliderFilter('price', 'price');
        const HtmlElementInStockSlider = this.createSliderFilter('stock', 'stock');
        HtmlElement.classList.add('gallery-filters-wrapper');
        HtmlElement.appendChild(HtmlElementBrandsWrapper);
        HtmlElement.appendChild(HtmlElementCategoriesWrapper);
        HtmlElement.appendChild(HtmlElementPriceSlider);
        HtmlElement.appendChild(HtmlElementInStockSlider);
        return HtmlElement;
    }

    private processQuery(): IProductsResponse[] {
        this.filteredResponses = router.changeQuery(this.query);
        return this.filteredResponses;
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
        HtmlElement.classList.add('filters-category-wrapper');
        return HtmlElement;
    }

    private createCheckboxFilter(
        attributeName: string,
        attributeValue: string,
        queryField: keyof IFiltersQuery,
        productField: keyof IProductsResponse
    ): HTMLElement {
        const HtmlElement = document.createElement('li');
        const quantity = response.products.reduce((accumulator, product) => {
            if (product[productField] === attributeValue) accumulator++;
            return accumulator;
        }, 0);
        HtmlElement.textContent = `${attributeValue} (${quantity})`;
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
        return HtmlElement;
    }

    private createSliderFilter(queryField: keyof IFiltersQuery, productField: keyof IProductsResponse): HTMLElement {
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
        fromInputSlider.value = `${Math.min(...fieldArray)}`;
        fromInputSlider.max = `${Math.max(...fieldArray)}`;
        fromInputSlider.style.height = '0';
        fromInputSlider.style.zIndex = '1';
        const toInputSlider = document.createElement('input');
        toInputSlider.type = 'range';
        toInputSlider.min = `${Math.min(...fieldArray)}`;
        toInputSlider.value = `${Math.max(...fieldArray)}`;
        toInputSlider.max = `${Math.max(...fieldArray)}`;
        sliderWrapper.append(fromInputSlider, toInputSlider);
        const formWrapper = document.createElement('div');
        const minValueElement = document.createElement('div');
        minValueElement.textContent = `${Math.min(...fieldArray)}`;
        minValueElement.classList.add('filter-slider-form-text');
        const maxValueElement = document.createElement('div');
        maxValueElement.textContent = `${Math.max(...fieldArray)}`;
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
            console.log([fromInputSlider.value, toInputSlider.value]);
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
            console.log([fromInputSlider.value, toInputSlider.value]);
            GalleryInstance.showData(this.processQuery());
        };
        fillSlider(fromInputSlider, toInputSlider, '#C6C6C6', '#25daa5', toInputSlider);
        setToggleAccessible(toInputSlider);
        formWrapper.classList.add('filter-slider-form-wrapper');
        HtmlElement.append(sliderWrapper, formWrapper);
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
