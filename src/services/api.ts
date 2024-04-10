import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetListParams,
  ProductData,
  ProductEditPayload,
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
    getProductCategory: builder.query<ProductsResponse, GetListParams>({
      query: (params) => buildGetProductCategoryUrl(params),
    }),

    getProducts: builder.query<ProductsResponse, GetListParams>({
      query: (params) => buildGetProductsUrl(params),
    }),

    updateForm: builder.mutation<ProductData, ProductEditPayload>({
      query: ({ id, ...payload }) => ({
        url: `products/${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductCategoryQuery,
  useGetProductsQuery,
  useUpdateFormMutation,
} = apiService;
