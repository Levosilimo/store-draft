import Page from '../../Page';
import { IProductsResponse } from '../../types';
import { changePage, GalleryInstance, router } from '../../index';

export default class ItemPage extends Page {
    protected _hash: string;
    HtmlElementInstance: HTMLElement;
    productsResponse: IProductsResponse;
    private itemImagesPointer = 0;
    constructor(productResponse: IProductsResponse) {
        super();
        this.productsResponse = productResponse;
        this._hash = `/product/${this.productsResponse.id}`;
        this.HtmlElementInstance = this.createHtmlElement();
    }
    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        const mainWrapper = document.createElement('div');
        const imageWrapper = this.createImageWrapper();
        const propertiesWrapper = this.createPropertiesWrapper();
        const buyWrapper = () => {
            const buttonsWrapper = document.createElement('div');
            buttonsWrapper.classList.add('item-page-buttons-wrapper');
            const cartButton = document.createElement('button');
            cartButton.classList.add('item-page-button');
            cartButton.innerText = 'Add to cart';
            cartButton.onclick = () => {
                //TODO: add cart logic
            };
            const buyNowButton = document.createElement('button');
            buyNowButton.classList.add('item-page-button');
            buyNowButton.innerText = 'Buy now';
            buyNowButton.onclick = () => {
                HtmlElement.append(this.createBuyNowWindow());
            };
            buttonsWrapper.append(cartButton, buyNowButton);
            return buttonsWrapper;
        };
        const breadcrumbsElement = document.createElement('p');
        breadcrumbsElement.innerText = `STORE >> ${this.productsResponse.category} >> ${this.productsResponse.brand} >> ${this.productsResponse.title}`.toUpperCase();
        breadcrumbsElement.classList.add('item-page-breadcrumbs');
        mainWrapper.classList.add('item-page-main-wrapper');
        mainWrapper.append(imageWrapper, propertiesWrapper, buyWrapper());
        HtmlElement.classList.add('item-page-wrapper');
        HtmlElement.append(breadcrumbsElement, mainWrapper);
        return HtmlElement;
    }

    private createImageWrapper(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('item-page-image-block-wrapper');
        const mainImageWrapper = document.createElement('div');
        mainImageWrapper.classList.add('item-page-image-wrapper');
        const ItemImage = document.createElement('img');
        ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
        mainImageWrapper.appendChild(ItemImage);
        const sideImageWrapper = document.createElement('div');
        sideImageWrapper.classList.add('item-page-side-images-wrapper');
        this.productsResponse.images.forEach((imageURL, index) => {
            const sideImage = document.createElement('img');
            if (index === this.itemImagesPointer) sideImage.classList.add('activated');
            sideImage.src = imageURL;
            sideImage.onmouseover = () => {
                ItemImage.src = sideImage.src;
            };
            sideImage.onmouseout = () => {
                ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
            };
            sideImage.onclick = () => {
                this.itemImagesPointer = index;
                ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
                Array.from(sideImageWrapper.children).forEach((item) => item.classList.remove('activated'));
                sideImage.classList.add('activated');
            };
            sideImageWrapper.append(sideImage);
        });
        HtmlElement.append(sideImageWrapper, mainImageWrapper);
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

    private createBuyNowWindow(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('buy-now-window');
        const personalInfoForm = document.createElement('form');
        personalInfoForm.name = 'personal-info';
        const personalInfoWrapper = document.createElement('div');
        personalInfoWrapper.classList.add('personal-info-wrapper');
        personalInfoWrapper.append(
            ItemPage.createInfoInput(
                'Full name',
                new RegExp('(^[A-Za-zА-яа-я]{3,})+(?:\\s[A-Za-zА-яа-я]{3,})+$'),
                'text'
            )
        );
        personalInfoWrapper.append(ItemPage.createInfoInput('Telephone number', new RegExp('^\\+[\\d]{9,}$'), 'tel'));
        personalInfoWrapper.append(
            ItemPage.createInfoInput('Delivery address', new RegExp('(^.{5,})+(?:\\s.{5,})+(?:\\s.{5,})+$'), 'text')
        );
        personalInfoWrapper.append(
            ItemPage.createInfoInput('Email', new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), 'email')
        );
        const cardInfoWrapper = document.createElement('div');
        cardInfoWrapper.classList.add('card-info-wrapper');
        cardInfoWrapper.append(ItemPage.createInfoInput('Card number', new RegExp('^\\d{16}$'), 'text', 16, 16));
        cardInfoWrapper.append(
            ItemPage.createInfoInput(
                'Expiration date',
                new RegExp('^(0[1-9]|1[0-2])\\/?([\\d]{4}|[\\d]{2})$'),
                'text',
                4,
                4
            )
        );
        cardInfoWrapper.append(ItemPage.createInfoInput('CVV', new RegExp('^\\d{3}$'), 'text', 3, 3));
        personalInfoForm.append(personalInfoWrapper, cardInfoWrapper);
        const submitInput = document.createElement('button');
        submitInput.type = 'submit';
        submitInput.value = 'submit';
        submitInput.name = 'submit';
        submitInput.textContent = 'Submit';
        submitInput.onclick = () => {
            if (personalInfoForm.reportValidity()) {
                const orderedTitle = document.createElement('h2');
                orderedTitle.textContent = `\'${this.productsResponse.title}\' has been successfully ordered!`;
                HtmlElement.replaceChildren(orderedTitle);
                setTimeout(() => {
                    changePage(GalleryInstance, true, '');
                    router.route();
                }, 2500);
            }
        };
        HtmlElement.append(personalInfoForm, submitInput);
        return HtmlElement;
    }

    private static createInfoInput(
        name: string,
        regexPattern: RegExp,
        type: string,
        maxlength?: number,
        minlength?: number
    ): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('personal-info-input-wrapper');
        const infoTypeTitle = document.createElement('h4');
        infoTypeTitle.textContent = name;
        const inputElement = document.createElement('input');
        inputElement.name = name;
        inputElement.type = type;
        inputElement.pattern = regexPattern.source;
        inputElement.required = true;
        if (maxlength) inputElement.maxLength = maxlength;
        if (minlength) inputElement.minLength = minlength;
        inputElement.onsubmit = (e) => {
            if (!new RegExp(inputElement.pattern).test(inputElement.value)) {
                e.preventDefault();
            }
        };
        HtmlElement.append(infoTypeTitle, inputElement);
        if (name === 'Expiration date') {
            inputElement.style.letterSpacing = '8px';
            const dividingSlash = document.createElement('span');
            dividingSlash.classList.add('dividing-slash');
            dividingSlash.textContent = '/';
            HtmlElement.append(dividingSlash);
        }
        if (name === 'Card number') {
            const cardType = document.createElement('span');
            cardType.classList.add('card-type');
            cardType.textContent = '';
            inputElement.onchange = () => {
                const cardNumber = inputElement.value;
                let regex = new RegExp('^4');
                if (cardNumber.match(regex) != null) cardType.textContent = 'Visa';
                else {
                    // Mastercard
                    regex = new RegExp('^5[1-5]');
                    if (cardNumber.match(regex) != null) cardType.textContent = 'Mastercard';
                    else {
                        // AMEX
                        regex = new RegExp('^3[47]');
                        if (cardNumber.match(regex) != null) cardType.textContent = 'AMEX';
                        else {
                            // Discover
                            regex = new RegExp(
                                '^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'
                            );
                            if (cardNumber.match(regex) != null) cardType.textContent = 'Discover';
                            else {
                                // Diners - Carte Blanche
                                regex = new RegExp('^30[0-5]');
                                if (cardNumber.match(regex) != null) cardType.textContent = 'Diners - Carte Blanche';
                                else {
                                    // Diners
                                    regex = new RegExp('^(30[6-9]|36|38)');
                                    if (cardNumber.match(regex) != null) cardType.textContent = 'Diners';
                                    else {
                                        // JCB
                                        regex = new RegExp('^35(2[89]|[3-8][0-9])');
                                        if (cardNumber.match(regex) != null) cardType.textContent = 'JCB';
                                        else {
                                            // Visa Electron
                                            regex = new RegExp('^(4026|417500|4508|4844|491(3|7))');
                                            if (cardNumber.match(regex) != null) cardType.textContent = 'Visa Electron';
                                            else cardType.textContent = '';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            HtmlElement.append(cardType);
        }
        return HtmlElement;
    }
}
