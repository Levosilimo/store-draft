import Page from '../../page';
import { IProductsResponse } from '../../types';
import galleryItems from './galleryItems';
import galleryFilters from './galleryFilters';
import { GalleryInstance, response } from '../../index';

export default class Gallery extends Page {
    HtmlElementInstance: HTMLElement;
    FiltersInstance: galleryFilters;
    ItemsInstance: galleryItems;
    private readonly HtmlElementItems: HTMLElement;
    constructor() {
        super();
        this.FiltersInstance = new galleryFilters();
        this.ItemsInstance = new galleryItems(response.products, false);
        this.HtmlElementItems = document.createElement('div');
        this.HtmlElementInstance = this.createHtmlElement();
    }
    private static selectOptionsArr: Array<string> = [
        'Price: Low to High',
        'Price: High to Low',
        'Avg. Customer Review',
    ];
    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('gallery');
        const sortingSelectElement = document.createElement('select');
        Gallery.selectOptionsArr.forEach((item) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = item;
            sortingSelectElement.append(optionElement);
        });
        sortingSelectElement.addEventListener('change', () => {
            const dataShown = this.ItemsInstance.productsResponses;
            switch (sortingSelectElement.value) {
                case Gallery.selectOptionsArr[0]: {
                    dataShown.sort((item1, item2) => item1.price - item2.price);
                    break;
                }
                case Gallery.selectOptionsArr[1]: {
                    dataShown.sort((item1, item2) => item2.price - item1.price);
                    break;
                }
                case Gallery.selectOptionsArr[2]: {
                    dataShown.sort((item1, item2) => item2.rating - item1.rating);
                    break;
                }
            }
            GalleryInstance.showData(dataShown, this.ItemsInstance.isFiltered);
        });
        this.HtmlElementItems.appendChild(sortingSelectElement);
        this.HtmlElementItems.appendChild(this.ItemsInstance.HtmlElementInstance);

        HtmlElement.appendChild(this.FiltersInstance.HtmlElementInstance);
        HtmlElement.appendChild(this.HtmlElementItems);
        return HtmlElement;
    }

    showData(productsResponses: IProductsResponse[], isFiltered: boolean): void {
        const oldHtmlElementInstance = this.ItemsInstance.HtmlElementInstance;
        this.ItemsInstance = new galleryItems(productsResponses, isFiltered);
        const oldHtmlElementItems = this.HtmlElementItems;
        this.HtmlElementItems.replaceChild(this.ItemsInstance.HtmlElementInstance, oldHtmlElementInstance);
        this.HtmlElementInstance.replaceChild(this.HtmlElementItems, oldHtmlElementItems);
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
