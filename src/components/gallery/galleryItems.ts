import { IProductsResponse } from '../../types';
import { changePage, GalleryInstance, isCustomEvent, router } from '../../index';
import ItemPage from '../itemPage/itemPage';

export default class galleryItems {
    get productsResponses(): IProductsResponse[] {
        return this._productsResponses;
    }
    HtmlElementInstance: HTMLElement;
    private readonly sortingElement: HTMLSelectElement;
    private _productsResponses: IProductsResponse[];
    constructor(productsResponses: IProductsResponse[]) {
        this._productsResponses = productsResponses;
        this.sortingElement = this.createSorting();
        this.HtmlElementInstance = this.createHtmlElement();
    }

    protected createHtmlElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.appendChild(this.sortingElement);
        HtmlElement.appendChild(this.createProductsElement());
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            if (typeof router.query.sorting === 'number') {
                this.sortingElement.value = galleryItems.selectOptionsArr[router.query.sorting];
            } else {
                this.sortingElement.value = galleryItems.selectOptionsArr[0];
            }
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElement;
    }

    private createProductsElement(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('items-wrapper');
        this.getSortedData().forEach((productsResponse) => {
            HtmlElement.appendChild(galleryItems.createProductHtmlElement(productsResponse));
        });
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            this._productsResponses = e.detail.productResponses;
            HtmlElement.replaceChildren('');
            this.getSortedData().forEach((productsResponse) => {
                HtmlElement.appendChild(galleryItems.createProductHtmlElement(productsResponse));
            });
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
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
            case galleryItems.selectOptionsArr[3]: {
                sortedData.sort((item1, item2) => item2.discountPercentage - item1.discountPercentage);
                break;
            }
        }
        return sortedData;
    }

    private static selectOptionsArr: Array<string> = [
        'Price: Low to High',
        'Price: High to Low',
        'Avg. Customer Review',
        'Discount Percentage',
    ];
    private createSorting(): HTMLSelectElement {
        const sortingSelectElement = document.createElement('select');
        sortingSelectElement.classList.add('sorting-items');
        galleryItems.selectOptionsArr.forEach((item) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = item;
            sortingSelectElement.append(optionElement);
        });
        sortingSelectElement.addEventListener('change', () => {
            const newQuery = router.query;
            newQuery.sorting = galleryItems.selectOptionsArr.findIndex((val) => val === sortingSelectElement.value);
            GalleryInstance.showData(router.changeQuery(newQuery));
        });
        return sortingSelectElement;
    }

    private static createProductHtmlElement(productsResponse: IProductsResponse): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.setAttribute('title', productsResponse.title);
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
            changePage(new ItemPage(productsResponse), true, '');
        });
        return HtmlElement;
    }

    hideHtmlElement(): void {
        this.HtmlElementInstance.remove();
    }
}
