import Page from '../../page';
import { IProductsResponse } from '../../types';

export default class ItemPage extends Page {
    HtmlElementInstance: HTMLElement;
    productsResponse: IProductsResponse;
    constructor(productResponse: IProductsResponse) {
        super();
        this.productsResponse = productResponse;
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('item-page-wrapper');
        const mainWrapper = document.createElement('div');
        const descWrapper = document.createElement('div');
        descWrapper.style.background = `url(${this.productsResponse.thumbnail})`;
        const ItemImage = document.createElement('img');
        const ItemTitle = document.createElement('span');
        const ItemPrice = document.createElement('span');
        ItemImage.src = this.productsResponse.images[0];
        ItemTitle.innerText = this.productsResponse.title;
        ItemPrice.innerText = `€${this.productsResponse.price.toString(10)}`;
        mainWrapper.appendChild(ItemImage);
        mainWrapper.appendChild(ItemTitle);
        mainWrapper.appendChild(ItemPrice);
        const ItemDescription = document.createElement('p');
        ItemDescription.innerText = this.productsResponse.description;
        descWrapper.appendChild(ItemDescription);
        HtmlElement.appendChild(mainWrapper);
        HtmlElement.appendChild(descWrapper);
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
