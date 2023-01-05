import './global.css';
import './assets/rsschool-logo.svg';
import './assets/github-logo.svg';
import { IResponse } from './types';
import Loader from './components/loader/loader';
import Router from './components/router';
import Gallery from './components/gallery/gallery';
import Page from './page';

const loader = new Loader();
export let response: IResponse = { limit: 0, products: [], total: 0, skip: 0 };
export const router = new Router();
export let GalleryInstance: Gallery = new Gallery();
const nameElement: HTMLElement = document.getElementById('header-name') ?? new HTMLElement();
nameElement.addEventListener('click', () => {
    router.clearQuery();
    GalleryInstance = new Gallery();
    changePage(GalleryInstance, true, '');
});
export const mainElement: HTMLElement = document.querySelector('.mainn') ?? new HTMLElement();
loader.load().then((responded) => {
    response = responded;
    response = {
        limit: response.limit,
        products: response.products.sort((item1, item2) => item1.price - item2.price),
        skip: response.skip,
        total: response.total,
    };
    router.route();
});
export function changePage(page: Page, pushHistory?: boolean, search?: string) {
    mainElement.replaceChildren(page.HtmlElementInstance);
    if (pushHistory) history.pushState({}, '', Router.getLocation(search, page.hash));
}
export function isCustomEvent(event: Event): event is CustomEvent {
    return 'detail' in event;
}

window.onload = router.route;
//window.onhashchange = router.route;
window.onpopstate = router.route;
