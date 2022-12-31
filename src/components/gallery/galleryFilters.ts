import { IFiltersQuery, IProductsResponse } from '../../types';
import { GalleryInstance, response, router } from '../../index';

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
        HtmlElement.classList.add('gallery-filters-wrapper');
        HtmlElement.appendChild(HtmlElementBrandsWrapper);
        HtmlElement.appendChild(HtmlElementCategoriesWrapper);
        return HtmlElement;
    }

    private processQuery(): IProductsResponse[] {
        return router.changeQuery(this.query);
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
            HtmlElementBrandsWrapper.appendChild(this.createBrandElement(brand));
        });
        HtmlElementBrandsWrapper.classList.add('filters-brands-wrapper');
        return HtmlElementBrandsWrapper;
    }

    private createBrandElement(brand: string): HTMLElement {
        const HtmlElement = document.createElement('li');
        const quantity = response.products.reduce((accumulator, currentValue) => {
            if (currentValue.brand === brand) accumulator++;
            return accumulator;
        }, 0);
        HtmlElement.textContent = `${brand} (${quantity})`;
        HtmlElement.setAttribute('brand', brand);
        if (Array.isArray(this.query.brands) && this.query.brands.some((brandQuery) => brandQuery === brand)) {
            HtmlElement.classList.add('checked-filter');
        }
        HtmlElement.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement) {
                const clickedElement = event.target;
                const brand = clickedElement.getAttribute('brand');
                if (brand) {
                    if (!HtmlElement.classList.contains('checked-filter')) {
                        if (!Array.isArray(this.query.brands)) this.query.brands = [brand];
                        else this.query.brands.push(brand);
                        HtmlElement.classList.add('checked-filter');
                    } else {
                        HtmlElement.classList.remove('checked-filter');
                        if (Array.isArray(this.query.brands)) {
                            const index = this.query.brands.indexOf(brand);
                            if (index > -1) {
                                this.query.brands.splice(index, 1);
                            }
                            if (this.query.brands.length === 0) delete this.query.brands;
                        }
                    }
                    GalleryInstance.showData(this.processQuery());
                }
            }
        });
        return HtmlElement;
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
            HtmlElement.appendChild(this.createCategoryElement(category));
        });
        HtmlElement.classList.add('filters-category-wrapper');
        return HtmlElement;
    }

    private createCategoryElement(category: string): HTMLElement {
        const HtmlElement = document.createElement('li');
        const quantity = response.products.reduce((accumulator, currentValue) => {
            if (currentValue.category === category) accumulator++;
            return accumulator;
        }, 0);
        HtmlElement.textContent = `${category} (${quantity})`;
        HtmlElement.setAttribute('category', category);
        if (
            Array.isArray(this.query.categories) &&
            this.query.categories.some((categoryQuery) => categoryQuery === category)
        ) {
            HtmlElement.classList.add('checked-filter');
        }
        HtmlElement.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement) {
                const clickedElement = event.target;
                const category = clickedElement.getAttribute('category');
                if (category) {
                    if (!HtmlElement.classList.contains('checked-filter')) {
                        if (!Array.isArray(this.query.categories)) this.query.categories = [category];
                        else this.query.categories.push(category);
                        HtmlElement.classList.add('checked-filter');
                    } else {
                        HtmlElement.classList.remove('checked-filter');
                        if (Array.isArray(this.query.categories)) {
                            const index = this.query.categories.indexOf(category);
                            if (index > -1) {
                                this.query.categories.splice(index, 1);
                            }
                            if (this.query.categories.length === 0) delete this.query.categories;
                        }
                    }
                    GalleryInstance.showData(this.processQuery());
                }
            }
        });
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
