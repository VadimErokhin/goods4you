import { GetListParams, PaginationParams } from "../components/types";

export function formatedPrice(basePrice: number, discount: number) {
  console.log("formatedPrice");

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

function getQuerySign(url: string) {
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
  console.log(params, str);

  return addPaginationParams(str, params.paging);
}
