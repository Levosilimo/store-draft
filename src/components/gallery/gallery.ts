import Page from '../../page';
import { IProductsResponse } from '../../types';
import galleryItems from './galleryItems';
import galleryFilters from './galleryFilters';

export default class Gallery extends Page {
    protected _hash: string;
    HtmlElementInstance: HTMLElement;
    FiltersInstance: galleryFilters;
    ItemsInstance: galleryItems;

    constructor() {
        super();
        this._hash = `/gallery`;
        this.FiltersInstance = new galleryFilters();
        this.ItemsInstance = new galleryItems(this.FiltersInstance.filteredResponses);
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('gallery');
        HtmlElement.appendChild(this.FiltersInstance.HtmlElementInstance);
        HtmlElement.appendChild(this.ItemsInstance.HtmlElementInstance);
        return HtmlElement;
    }

    showData(productsResponses: IProductsResponse[]): void {
        const oldHtmlElementInstance = this.ItemsInstance.HtmlElementInstance;
        this.ItemsInstance.rerender(productsResponses);
        this.HtmlElementInstance.replaceChild(this.ItemsInstance.HtmlElementInstance, oldHtmlElementInstance);
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
