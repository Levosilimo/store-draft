import Page from '../../page';
import { IProductsResponse } from '../../types';
import galleryItems from './galleryItems';
import galleryFilters from './galleryFilters';
import { response } from '../../index';

export default class Gallery extends Page {
    HtmlElementInstance: HTMLElement;
    FiltersInstance: galleryFilters;
    ItemsInstance: galleryItems;
    constructor() {
        super();
        this.FiltersInstance = new galleryFilters();
        this.ItemsInstance = new galleryItems(response.products, false);
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('gallery');
        HtmlElement.appendChild(this.FiltersInstance.HtmlElementInstance);
        HtmlElement.appendChild(this.ItemsInstance.HtmlElementInstance);
        return HtmlElement;
    }

    showData(productsResponses: IProductsResponse[], isFiltered: boolean): void {
        const oldHtmlElementInstance = this.ItemsInstance.HtmlElementInstance;
        this.ItemsInstance.rerender(productsResponses, isFiltered);
        this.HtmlElementInstance.replaceChild(this.ItemsInstance.HtmlElementInstance, oldHtmlElementInstance);
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
