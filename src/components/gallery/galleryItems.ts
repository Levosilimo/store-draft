import { IProductsResponse } from '../../types';
import { changePage, GalleryInstance } from '../../index';
import ItemPage from '../itemPage/itemPage';

export default class galleryItems {
    get productsResponses(): IProductsResponse[] {
        return this._productsResponses;
    }
    get isFiltered(): boolean {
        return this._isFiltered;
    }
    private _isFiltered: boolean;
    HtmlElementInstance: HTMLElement;
    private readonly sortingElement: HTMLSelectElement;
    private _productsResponses: IProductsResponse[];
    constructor(productsResponses: IProductsResponse[], isFiltered: boolean) {
        this._productsResponses = productsResponses;
        this._isFiltered = isFiltered;
        this.sortingElement = this.createSorting();
        this.HtmlElementInstance = this.createHtmlElement();
    }

    rerender(productsResponses: IProductsResponse[], isFiltered: boolean) {
        this._productsResponses = productsResponses;
        this._isFiltered = isFiltered;
        const HtmlElement = document.createElement('div');
        HtmlElement.appendChild(this.sortingElement);
        HtmlElement.appendChild(this.createProductsElement());
        this.HtmlElementInstance = HtmlElement;
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.appendChild(this.sortingElement);
        HtmlElement.appendChild(this.createProductsElement());
        return HtmlElement;
    }

    private createProductsElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('items-wrapper');
        this.getSortedData().forEach((productsResponse) => {
            HtmlElement.appendChild(galleryItems.createProductHtmlElement(productsResponse));
        });
        return HtmlElement;
    }

    private getSortedData(): IProductsResponse[] {
        const sortedData = this.productsResponses;
        switch (this.sortingElement.value) {
            case galleryItems.selectOptionsArr[0]: {
                sortedData.sort((item1, item2) => item1.price - item2.price);
                break;
            }
            case galleryItems.selectOptionsArr[1]: {
                sortedData.sort((item1, item2) => item2.price - item1.price);
                break;
            }
            case galleryItems.selectOptionsArr[2]: {
                sortedData.sort((item1, item2) => item2.rating - item1.rating);
                break;
            }
        }
        return sortedData;
    }

    private static selectOptionsArr: Array<string> = [
        'Price: Low to High',
        'Price: High to Low',
        'Avg. Customer Review',
    ];
    private createSorting(): HTMLSelectElement {
        const sortingSelectElement = document.createElement('select');
        galleryItems.selectOptionsArr.forEach((item) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = item;
            sortingSelectElement.append(optionElement);
        });
        sortingSelectElement.addEventListener('change', () => {
            const dataShown = this.getSortedData();
            GalleryInstance.showData(dataShown, this.isFiltered);
        });
        return sortingSelectElement;
    }

    private static createProductHtmlElement(productsResponse: IProductsResponse): HTMLElement {
        const HtmlElement = document.createElement('div');
        const ItemImage = document.createElement('img');
        const ItemTitle = document.createElement('span');
        const ItemPrice = document.createElement('span');
        ItemImage.src = productsResponse.images[productsResponse.images.length - 1];
        ItemTitle.innerText = productsResponse.title;
        ItemPrice.innerText = `€${productsResponse.price.toString(10)}`;
        HtmlElement.classList.add('gallery-item');
        HtmlElement.appendChild(ItemImage);
        HtmlElement.appendChild(ItemTitle);
        HtmlElement.appendChild(ItemPrice);
        HtmlElement.addEventListener('click', () => {
            changePage(new ItemPage(productsResponse), true);
        });
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
