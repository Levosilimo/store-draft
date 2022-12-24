import Page from '../../page';
import { IProductsResponse } from '../../types';

export default class ItemPage extends Page {
    HtmlElementInstance: HTMLElement;
    productsResponse: IProductsResponse;
    private itemImagesPointer = 0;
    constructor(productResponse: IProductsResponse) {
        super();
        this.productsResponse = productResponse;
        this.HtmlElementInstance = this.createHtmlElement();
    }
    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        const imageWrapper = this.createImageWrapper();
        const propertiesWrapper = this.createPropertiesWrapper();
        HtmlElement.append(imageWrapper, propertiesWrapper);
        HtmlElement.classList.add('item-page-wrapper');
        return HtmlElement;
    }

    private createImageWrapper(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('item-page-image-wrapper');
        const ItemImage = document.createElement('img');
        ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
        HtmlElement.appendChild(ItemImage);
        const buttonLeftElement = document.createElement('button');
        const buttonRightElement = document.createElement('button');
        buttonLeftElement.innerText = '❮';
        buttonLeftElement.addEventListener('click', () => {
            if (this.itemImagesPointer - 1 >= 0) this.itemImagesPointer -= 1;
            else this.itemImagesPointer = this.productsResponse.images.length - 1;
            ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
        });
        buttonRightElement.innerText = '❯';
        buttonRightElement.addEventListener('click', () => {
            if (this.itemImagesPointer + 1 < this.productsResponse.images.length) this.itemImagesPointer += 1;
            else this.itemImagesPointer = 0;
            ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
        });
        HtmlElement.prepend(buttonLeftElement);
        HtmlElement.append(buttonRightElement);
        return HtmlElement;
    }

    private createPropertiesWrapper(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('item-page-properties-wrapper');
        /* Title */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Title', this.productsResponse.title));
        /* Price */
        HtmlElement.appendChild(
            ItemPage.createPropertyWrapper('Price', `€${this.productsResponse.price.toString(10)}`)
        );
        /* Discount percentage */
        HtmlElement.appendChild(
            ItemPage.createPropertyWrapper(
                'Discount percentage',
                `${this.productsResponse.discountPercentage.toString(10)}`
            )
        );
        /* Category */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Category', this.productsResponse.category));
        /* Description */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Description', this.productsResponse.description));
        /* Rating */
        HtmlElement.appendChild(
            ItemPage.createPropertyWrapper('Rating', `${this.productsResponse.rating.toString(10)}`, true)
        );
        /* Stock */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Stock', `${this.productsResponse.stock.toString(10)}`));
        return HtmlElement;
    }

    private static createPropertyWrapper(name: string, value: string, isRating?: boolean): HTMLElement {
        const propertyWrapper = document.createElement('div');
        propertyWrapper.classList.add('item-page-property-wrapper');
        const propertyName = document.createElement('span');
        propertyName.classList.add('item-page-property-name');
        propertyName.innerText = name;
        let propertyValue: HTMLElement = document.createElement('span');
        if (isRating) {
            const root = document.documentElement;
            root.style.setProperty('--rating', `${(Number.parseFloat(value) / 5) * 100}%`);
            propertyValue = document.createElement('div');
            propertyValue.classList.add('stars');
            const ratingTooltipWrapper = document.createElement('div');
            ratingTooltipWrapper.classList.add('rating-tooltip-wrapper');
            const ratingTooltip = document.createElement('p');
            ratingTooltip.innerText = value;
            ratingTooltip.classList.add('rating-tooltip');
            ratingTooltipWrapper.append(ratingTooltip);
            propertyValue.append(ratingTooltipWrapper);
        } else {
            propertyValue.innerText = value;
        }
        propertyValue.classList.add('item-page-property-value');
        propertyWrapper.append(propertyName, propertyValue);
        return propertyWrapper;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
