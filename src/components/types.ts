export enum TextTypes {
  Primary = "primary",
  Secondary = "secondary",
  Info = "info",
  Description = "description",
}

export enum ButtonTypes {
  Primary = "primary",
  Apply = "apply",
  Reset = "reset",
  Pagination = "pagination",
}

export enum TitlesColorTypes {
  White = "white",
  Black = "black",
}

export interface ProductData {
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

export interface PaginationParams {
  skip?: number;
  limit?: number;
}

export interface Pagination extends PaginationParams {
  total: number;
}

export interface ProductsResponse extends Pagination {
  products: ProductData[];
}

export interface GetListParams {
  query?: string;
  paging: PaginationParams;
}

export type ProductEditPayload = Partial<ProductData>;
