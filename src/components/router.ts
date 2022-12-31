import { IFiltersQuery, IProductsResponse } from '../types';
import ItemPage from './itemPage/itemPage';
import { changePage, GalleryInstance, response } from '../index';

export default class Router {
    get query(): IFiltersQuery {
        return this._query;
    }
    private _query: IFiltersQuery;
    constructor() {
        this._query = Router.processQuery();
    }

    public clearQuery(): void {
        this._query = {};
    }

    private static filterItemsByQuery(updateQuery: IFiltersQuery): IProductsResponse[] {
        let result = response.products;
        result = result.filter(
            (productsResponse) =>
                !Array.isArray(updateQuery.brands) ||
                updateQuery.brands.some((brand) => productsResponse.brand === brand)
        );
        result = result.filter(
            (productsResponse) =>
                !Array.isArray(updateQuery.categories) ||
                updateQuery.categories.some((category) => productsResponse.category === category)
        );
        return result;
    }

    public route(): void {
        /* Hash processing */
        console.log(window.location.hash);
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
        /* Query processing */
        this._query = Router.processQuery();
        GalleryInstance.showData(Router.filterItemsByQuery(this._query));
    }

    private static processQuery(): IFiltersQuery {
        const result: IFiltersQuery = {};
        const urlQuery = new URLSearchParams(window.location.search);
        const brands = urlQuery.get('brands');
        const categories = urlQuery.get('categories');
        if (brands) result.brands = brands.split('↕');
        if (categories) result.categories = categories.split('↕');
        return result;
    }

    public changeQuery(updateQuery: IFiltersQuery): IProductsResponse[] {
        Object.assign(this._query, updateQuery);
        if (this._query.categories?.length === 0) this._query.categories = undefined;
        if (this._query.brands?.length === 0) this._query.categories = undefined;
        const urlSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(this._query)) {
            let param: string = value.toString();
            if (Array.isArray(value)) param = value.join('↕');
            urlSearchParams.append(key, param);
        }
        window.history.pushState({}, '', Router.getLocation(urlSearchParams.toString()));
        return Router.filterItemsByQuery(updateQuery);
    }

    public static getLocation(search?: string, hash?: string): string {
        return (
            window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            (typeof search === 'undefined' ? window.location.search : search.length === 0 ? search : `?${search}`) +
            (typeof hash === 'undefined' ? window.location.hash : `#${hash}`)
        );
    }
}
