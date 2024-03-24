import { useCallback, useState } from "react";
import { PaginationParams, ProductData } from "../components/types";

export const DEFAULT_PAGINATION: PaginationParams = {
  limit: 9,
  skip: 0,
};

export function usePagination() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [paginationParams, setPaginationParams] =
    useState<PaginationParams>(DEFAULT_PAGINATION);

  const clear = useCallback(() => {
    setProducts([]);
    setPaginationParams(DEFAULT_PAGINATION);
  }, [setPaginationParams, setProducts]);

  return {
    products,
    paginationParams,
    setProducts,
    setPaginationParams,
    clear,
  };
}
