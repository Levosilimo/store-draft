import { IProductsResponse } from '../../types';
import { changePage, GalleryInstance, isCustomEvent, router } from '../../index';
import ItemPage from '../itemPage/ItemPage';

export default class GalleryItems {
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
        HtmlElement.classList.add('gallery-items-wrapper');
        HtmlElement.appendChild(this.createSortingWrapper());
        HtmlElement.appendChild(this.createProductsElement());
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            if (typeof router.query.sorting === 'number') {
                this.sortingElement.value = GalleryItems.selectOptionsArr[router.query.sorting];
            } else {
                this.sortingElement.value = GalleryItems.selectOptionsArr[0];
            }
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElement;
    }

    private createProductsElement(): HTMLDivElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('items-wrapper');
        if (router.query.smallMode) HtmlElement.classList.add('small');
        const sortedData = this.getSortedData();
        if (sortedData.length === 0) {
            const titleNoProducts = document.createElement('h2');
            titleNoProducts.textContent = 'No products found =(';
            HtmlElement.append(titleNoProducts);
        } else {
            sortedData.forEach((productsResponse, index) => {
                HtmlElement.appendChild(
                    GalleryItems.createProductHtmlElement(productsResponse, index, router.query.smallMode)
                );
            });
        }
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            this._productsResponses = e.detail.productResponses;
            HtmlElement.replaceChildren('');
            if (router.query.smallMode) HtmlElement.classList.add('small');
            else HtmlElement.classList.remove('small');
            const sortedData = this.getSortedData();
            if (sortedData.length === 0) {
                const titleNoProducts = document.createElement('h2');
                titleNoProducts.textContent = 'No products found =(';
                HtmlElement.append(titleNoProducts);
            } else {
                sortedData.forEach((productsResponse, index) => {
                    HtmlElement.appendChild(
                        GalleryItems.createProductHtmlElement(productsResponse, index, router.query.smallMode)
                    );
                });
            }
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
            case GalleryItems.selectOptionsArr[0]: {
                sortedData.sort((item1, item2) => item1.price - item2.price);
                break;
            }
            case GalleryItems.selectOptionsArr[1]: {
                sortedData.sort((item1, item2) => item2.price - item1.price);
                break;
            }
            case GalleryItems.selectOptionsArr[2]: {
                sortedData.sort((item1, item2) => item2.rating - item1.rating);
                break;
            }
            case GalleryItems.selectOptionsArr[3]: {
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
        GalleryItems.selectOptionsArr.forEach((item) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = item;
            sortingSelectElement.append(optionElement);
        });
        sortingSelectElement.addEventListener('change', () => {
            const newQuery = router.query;
            newQuery.sorting = GalleryItems.selectOptionsArr.findIndex((val) => val === sortingSelectElement.value);
            GalleryInstance.showData(router.changeQuery(newQuery));
        });
        return sortingSelectElement;
    }

    private createSortingWrapper(): HTMLElement {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('sorting-wrapper');
        HtmlElement.appendChild(this.sortingElement);
        const styleChangerWrapper = document.createElement('div');
        styleChangerWrapper.classList.add('style-changer-wrapper');
        const styleChangerButtonSmall = document.createElement('button');
        styleChangerButtonSmall.onclick = () => {
            styleChangerButtonBig.classList.remove('activated');
            styleChangerButtonSmall.classList.add('activated');
            const newQuery = router.query;
            newQuery.smallMode = true;
            GalleryInstance.showData(router.changeQuery(newQuery));
        };
        styleChangerButtonSmall.classList.add('style-changer-button', 'small');
        styleChangerButtonSmall.style.backgroundImage = 'url(assets/tiles.svg)';
        const styleChangerButtonBig = document.createElement('button');
        styleChangerButtonBig.classList.add('style-changer-button', 'big', 'activated');
        styleChangerButtonBig.onclick = () => {
            styleChangerButtonSmall.classList.remove('activated');
            styleChangerButtonBig.classList.add('activated');
            const newQuery = router.query;
            delete newQuery.smallMode;
            GalleryInstance.showData(router.changeQuery(newQuery));
        };
        styleChangerButtonBig.style.backgroundImage = 'url(assets/tiles.svg)';
        styleChangerWrapper.append(styleChangerButtonSmall, styleChangerButtonBig);
        HtmlElement.append(styleChangerWrapper);
        HtmlElement.addEventListener('changequery', (e: Event) => {
            if (!isCustomEvent(e)) throw new Error('not a custom event');
            e.stopPropagation();
            if (router.query.smallMode) {
                styleChangerButtonBig.classList.remove('activated');
                styleChangerButtonSmall.classList.add('activated');
            } else {
                styleChangerButtonSmall.classList.remove('activated');
                styleChangerButtonBig.classList.add('activated');
            }
        });
        return HtmlElement;
    }

    private static createProductHtmlElement(
        productsResponse: IProductsResponse,
        index: number,
        small?: boolean
    ): HTMLElement {
        const HtmlElement = document.createElement('div');
        if (small) HtmlElement.classList.add('small');
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
        setTimeout(() => HtmlElement.classList.add('animated'), index * 10);
        return HtmlElement;
    }
}
