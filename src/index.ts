import './global.css';
import './assets/rsschool-logo.svg';
import './assets/github-logo.svg';
import { IProductsResponse, IResponse } from './types';
import Loader from './components/loader/loader';
import Gallery from './components/gallery/gallery';
import Page from './page';
import ItemPage from './components/itemPage/itemPage';

export let response: IResponse = { limit: 0, products: [], total: 0, skip: 0 };
export let GalleryInstance: Gallery = new Gallery();
const nameElement: HTMLElement = document.getElementById('header-name') ?? new HTMLElement();
nameElement.addEventListener('click', () => {
    changePage(GalleryInstance, true);
});
export const mainElement: HTMLElement = document.querySelector('.mainn') ?? new HTMLElement();
const loader = new Loader();
loader.load().then((responded) => {
    response = responded;
    response = {
        limit: response.limit,
        products: response.products.sort((item1, item2) => item1.price - item2.price),
        skip: response.skip,
        total: response.total,
    };
    GalleryInstance = new Gallery();
    changePage(GalleryInstance, true);
});
export function changePage(page: Page, pushHistory?: boolean) {
    mainElement.replaceChildren(page.HtmlElementInstance);
    if (pushHistory) history.pushState({}, '', `/#${page.hash}`);
}

window.onload = processHash;
window.onhashchange = processHash;

function processHash(): void {
    if (window.location.hash.startsWith('#/product/')) {
        const id = window.location.hash.substring(10);
        const productResponse: IProductsResponse | null =
            response.products.find((product) => {
                return product.id.toString(10) === id;
            }) ?? null;
        if (productResponse) {
            changePage(new ItemPage(productResponse));
        } else {
            //TODO: change page to 404;
            changePage(GalleryInstance);
        }
        return;
    }
    switch (window.location.hash) {
        case '#/gallery': {
            changePage(GalleryInstance);
            break;
        }
        case '#/cart': {
            //TODO: change page to cart;
            changePage(GalleryInstance);
            break;
        }
        default: {
            //TODO: change page to 404;
            changePage(GalleryInstance);
        }
    }
}
