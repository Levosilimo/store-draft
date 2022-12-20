import Page from '../../page';
import { IProductsResponse } from '../../types';
import { GalleryInstance, response } from '../../index';

export default class GalleryFilters extends Page {
    HtmlElementInstance: HTMLElement;
    constructor() {
        super();
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
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
            HtmlElementBrandsWrapper.appendChild(this.createBrandSelector(brand));
        });
        HtmlElement.classList.add('gallery-filters-wrapper');
        HtmlElementBrandsWrapper.classList.add('filters-brands-wrapper');
        HtmlElement.appendChild(HtmlElementBrandsWrapper);
        return HtmlElement;
    }

    private createBrandSelector(brand: string): HTMLElement {
        const HtmlElement = document.createElement('li');
        const quantity = response.products.reduce((accumulator, currentValue) => {
            if (currentValue.brand === brand) accumulator++;
            return accumulator;
        }, 0);
        HtmlElement.textContent = `${brand} (${quantity})`;
        HtmlElement.setAttribute('brand', brand);
        HtmlElement.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement) {
                const clickedElement = event.target;
                let dataToShow: IProductsResponse[] = response.products.filter((productResponse) => {
                    return productResponse.brand === clickedElement.getAttribute('brand');
                });
                if (!HtmlElement.classList.contains('checked-filter')) {
                    HtmlElement.classList.add('checked-filter');
                    if (GalleryInstance.ItemsInstance.isFiltered) {
                        dataToShow = GalleryInstance.ItemsInstance.productsResponses.concat(dataToShow);
                    }
                } else {
                    HtmlElement.classList.remove('checked-filter');
                    dataToShow = GalleryInstance.ItemsInstance.productsResponses.filter((productResponse) => {
                        return productResponse.brand !== clickedElement.getAttribute('brand');
                    });
                    if (dataToShow.length === 0) {
                        dataToShow = response.products;
                        GalleryInstance.showData(dataToShow, false);
                        return;
                    }
                }
                GalleryInstance.showData(dataToShow, true);
            }
        });
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
