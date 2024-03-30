import { GetListParams, PaginationParams } from "../components/types";

export function formatPrice(basePrice: number, discount: number) {
  if (discount > 100) {
    console.error("Not valid discount", discount);
    return 0;
  }
  return basePrice - Math.ceil((basePrice * discount) / 100);
}

export const formatCategories = (categories: string[]) => {
  return categories.reduce((acc, item) => {
    const rowLength = acc.length;
    if (!rowLength) {
      acc[0] = [item];
    } else {
      const currentRow = acc[rowLength - 1];
      const cellLength = currentRow.length;
      if (cellLength < 2) {
        currentRow.push(item);
      } else {
        acc[rowLength] = [item];
      }
    }
    return acc;
  }, [] as string[][]);
};

export function getQuerySign(url: string) {
  return url.includes("?") ? "&" : "?";
}

function addPaginationParams(url: string, params: PaginationParams) {
  let result = url;

  if (params.limit) {
    result += `${getQuerySign(result)}limit=${params.limit}`;
  }

  if (params.skip) {
    result += `${getQuerySign(result)}skip=${params.skip}`;
  }

  return result;
}

export function buildGetProductCategoryUrl(params: GetListParams) {
  const str = params.query ? `/products/category/${params.query}` : "/products";

  return addPaginationParams(str, params.paging);
}

export function buildGetProductsUrl(params: GetListParams) {
  const str = params.query ? `/products/search?q=${params.query}` : "/products";

  return addPaginationParams(str, params.paging);
}
