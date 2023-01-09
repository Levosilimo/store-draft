import Page from '../../Page';
import { IProductsResponse } from '../../types';
import GalleryItems from './GalleryItems';
import GalleryFilters from './GalleryFilters';

export default class GalleryPage extends Page {
    protected _hash: string;
    HtmlElementInstance: HTMLElement;
    FiltersInstance: GalleryFilters;
    ItemsInstance: GalleryItems;

    constructor() {
        super();
        this._hash = `/gallery`;
        this.FiltersInstance = new GalleryFilters();
        this.ItemsInstance = new GalleryItems(this.FiltersInstance.filteredResponses);
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('gallery');
        HtmlElement.appendChild(this.FiltersInstance.HtmlElementInstance);
        HtmlElement.appendChild(this.ItemsInstance.HtmlElementInstance);
        return HtmlElement;
    }

    showData(productsResponses: IProductsResponse[]): IProductsResponse[] {
        const dataUpdate = new CustomEvent('changequery', {
            detail: {
                productResponses: productsResponses,
            },
        });
        this.FiltersInstance.HtmlElementInstance.dispatchEvent(dataUpdate);
        this.ItemsInstance.HtmlElementInstance.dispatchEvent(dataUpdate);
        return productsResponses;
    }
}
