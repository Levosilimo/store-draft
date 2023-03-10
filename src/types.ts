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
