import Page from '../../page';
import { IProductsResponse } from '../../types';
import { changePage } from '../../index';
import ItemPage from '../itemPage/itemPage';

export default class galleryItems extends Page {
    get productsResponses(): IProductsResponse[] {
        return this._productsResponses;
    }
    get isFiltered(): boolean {
        return this._isFiltered;
    }
    private readonly _isFiltered: boolean;
    HtmlElementInstance: HTMLElement;
    private readonly _productsResponses: IProductsResponse[];
    constructor(productsResponses: IProductsResponse[], isFiltered: boolean) {
        super();
        this._productsResponses = productsResponses;
        this._isFiltered = isFiltered;
        this.HtmlElementInstance = this.createHtmlElement();
    }
    private static selectOptionsArr: Array<string> = [
        'Price: Low to High',
        'Price: High to Low',
        'Avg. Customer Review',
    ];
    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('items-wrapper');
        this._productsResponses.forEach((productsResponse) => {
            HtmlElement.appendChild(galleryItems.createProductHtmlElement(productsResponse));
        });
        return HtmlElement;
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
            changePage(new ItemPage(productsResponse));
        });
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
