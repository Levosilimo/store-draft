import { IFiltersQuery, IProductsResponse } from '../types';
import ItemPage from './itemPage/ItemPage';
import { changePage, GalleryInstance, response, router } from '../index';
import NotFoundPage from './notFoundPage/NotFoundPage';

export default class Router {
    get query(): IFiltersQuery {
        return this._query;
    }
    private _query: IFiltersQuery;
    constructor() {
        this._query = Router.processQuery();
    }

    public clearQuery(): IProductsResponse[] {
        return this.changeQuery({});
    }

    private static filterItemsByQuery(updateQuery: IFiltersQuery): IProductsResponse[] {
        router._query = updateQuery;
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
        result = result.filter(
            (productsResponse) =>
                !Array.isArray(updateQuery.price) ||
                updateQuery.price.length !== 2 ||
                (productsResponse.price >= Number(updateQuery.price[0]) &&
                    productsResponse.price <= Number(updateQuery.price[1]))
        );
        result = result.filter(
            (productsResponse) =>
                !Array.isArray(updateQuery.stock) ||
                updateQuery.stock.length !== 2 ||
                (productsResponse.stock >= Number(updateQuery.stock[0]) &&
                    productsResponse.stock <= Number(updateQuery.stock[1]))
        );
        result = result.filter(
            (productsResponse) =>
                !updateQuery.search ||
                productsResponse.discountPercentage.toString(10).includes(updateQuery.search) ||
                productsResponse.price.toString(10).includes(updateQuery.search) ||
                productsResponse.rating.toString(10).includes(updateQuery.search) ||
                productsResponse.brand.toLowerCase().includes(updateQuery.search) ||
                productsResponse.category.toLowerCase().includes(updateQuery.search) ||
                productsResponse.description.toLowerCase().includes(updateQuery.search) ||
                productsResponse.title.toLowerCase().includes(updateQuery.search)
        );
        if (typeof updateQuery.sorting === 'number') {
            switch (updateQuery.sorting) {
                case 0: {
                    result.sort((item1, item2) => item1.price - item2.price);
                    break;
                }
                case 1: {
                    result.sort((item1, item2) => item2.price - item1.price);
                    break;
                }
                case 2: {
                    result.sort((item1, item2) => item2.rating - item1.rating);
                    break;
                }
                case 3: {
                    result.sort((item1, item2) => item2.discountPercentage - item1.discountPercentage);
                    break;
                }
            }
        } else result.sort((item1, item2) => item1.price - item2.price);
        return result;
    }

    public route(): void {
        /* Hash processing */
        if (window.location.hash.startsWith('#/product/')) {
            const id = window.location.hash.substring(10);
            const productResponse: IProductsResponse | null =
                response.products.find((product) => {
                    return product.id.toString(10) === id;
                }) ?? null;
            if (productResponse) {
                changePage(new ItemPage(productResponse));
            } else {
                changePage(new NotFoundPage());
            }
            return;
        }
        switch (window.location.hash) {
            case '#/gallery':
            case '': {
                changePage(GalleryInstance);
                break;
            }
            case '#/cart': {
                //TODO: change page to cart;
                changePage(GalleryInstance);
                break;
            }
            default: {
                changePage(new NotFoundPage());
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
        const price = urlQuery.get('price');
        const stock = urlQuery.get('stock');
        const sorting = urlQuery.get('sorting');
        const search = urlQuery.get('search');
        const smallMode = urlQuery.get('smallMode');
        if (brands) result.brands = brands.split('↕');
        if (categories) result.categories = categories.split('↕');
        if (price) result.price = price.split('↕');
        if (stock) result.stock = stock.split('↕');
        if (sorting) result.sorting = Number(sorting);
        if (search) result.search = search;
        if (smallMode) result.smallMode = Boolean(smallMode);
        return result;
    }

    public changeQuery(updateQuery: IFiltersQuery): IProductsResponse[] {
        this._query = updateQuery;
        if (this._query.categories?.length === 0) delete this._query.categories;
        if (this._query.brands?.length === 0) delete this._query.brands;
        if (this._query.search?.length === 0) delete this._query.search;
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
