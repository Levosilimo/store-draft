export interface IProductsResponse {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface IResponse {
    limit: number;
    products: IProductsResponse[];
    skip: number;
    total: number;
}

export interface IFiltersQuery {
    brands?: string[];
    categories?: string[];
    price?: string[];
    stock?: string[];
    sorting?: number;
    search?: string;
    smallMode?: boolean;
}
