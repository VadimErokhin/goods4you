import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetListParams,
  ProductData,
  ProductsResponse,
} from "../components/types";
import { buildGetProductCategoryUrl, buildGetProductsUrl } from "../helpers";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getCategories: builder.query<string[], unknown>({
      query: () => `/products/categories/`,
    }),
    getProduct: builder.query<ProductData, string>({
      query: (id) => `/products/${id}`,
    }),
    // getLimitAndsSkipProducts: builder.query<unknown, []>({
    //   query: (limit: string, skip: string) =>
    //     `?limit=${limit}&skip=${skip}&select=title,price`,
    // }),
    getProductCategory: builder.query<ProductsResponse, GetListParams>({
      query: (params) => buildGetProductCategoryUrl(params),
    }),

    getProducts: builder.query<ProductsResponse, GetListParams>({
      query: (params) => buildGetProductsUrl(params),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductQuery,
  // useGetLimitAndsSkipProductsQuery,
  useGetProductCategoryQuery,
  useGetProductsQuery,
} = apiService;
