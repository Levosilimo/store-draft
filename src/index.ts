import './global.css';
import './assets/rsschool-logo.svg';
import './assets/github-logo.svg';
import { IResponse } from './types';
import Loader from './components/loader/loader';
import Gallery from './components/gallery/gallery';
import Page from './page';

export let response: IResponse = { limit: 0, products: [], total: 0, skip: 0 };
export let GalleryInstance: Gallery = new Gallery();
const nameElement: HTMLElement = document.getElementById('header-name') ?? new HTMLElement();
nameElement.addEventListener('click', () => {
    changePage(GalleryInstance);
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
    if (mainElement) mainElement.appendChild(GalleryInstance.HtmlElementInstance);
});
export function changePage(page: Page) {
    mainElement.replaceChildren(page.HtmlElementInstance);
}
