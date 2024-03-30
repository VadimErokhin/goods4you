import { describe, expect, it, vi } from "vitest";
import {
  buildGetProductCategoryUrl,
  buildGetProductsUrl,
  formatCategories,
  formatPrice,
  getQuerySign,
} from "../helpers";
console.error = vi.fn();
describe("formatPrice", () => {
  it("it must calculate discount price based on price and discount percentage", () => {
    const cases = [
      {
        price: 100,
        discount: 10,
        result: 90,
      },
      {
        price: 39,
        discount: 100,
        result: 0,
      },
    ];
    cases.forEach((item) => {
      const value = formatPrice(item.price, item.discount);
      expect(value).toBe(item.result);
    });
  });
  it("it must return 0 and show console error if discount > 100", () => {
    const cases = [
      {
        price: 39,
        discount: 1000,
        result: 0,
      },
    ];
    cases.forEach((item) => {
      const value = formatPrice(item.price, item.discount);
      expect(value).toBe(item.result);
      expect(console.error).toBeCalled();
    });
  });
});

describe("getQuerySign", () => {
  it("must return ? if url does not include it", () => {
    const cases = [
      {
        url: "products/product/1",
        result: "?",
      },
    ];

    cases.forEach((item) => {
      const sign = getQuerySign(item.url);
      expect(sign).toBe(item.result);
    });
  });
  it("must return & if url includes ?", () => {
    const cases = [
      {
        url: "products/product/1?",
        result: "&",
      },
    ];

    cases.forEach((item) => {
      const sign = getQuerySign(item.url);
      expect(sign).toBe(item.result);
    });
  });
});

describe("formatCategories", () => {
  it("must return array  from [1,2,3,4] to [[1, 2], [3,4]]", () => {
    const cases = [
      {
        arr: ["1", "2", "3", "4", "5", "6"],
        result: [
          ["1", "2"],
          ["3", "4"],
          ["5", "6"],
        ],
      },
    ];

    cases.forEach((item) => {
      const arr = formatCategories(item.arr);
      expect(arr).toStrictEqual(item.result);
    });
  });
});

describe("buildGetProductCategoryUrl", () => {
  it("it must build and return category url", () => {
    const cases = [
      {
        query: "laptop",
        paging: {
          skip: 0,
          limit: 3,
        },
        result: "/products/category/laptop?limit=3",
      },
      {
        query: "",
        paging: { skip: 0, limit: 3 },
        result: "/products?limit=3",
      },
    ];

    cases.forEach((item) => {
      const str = buildGetProductCategoryUrl(item);
      expect(str).toBe(item.result);
    });
  });
  it("must add paging params", () => {
    const cases = [
      {
        paging: {
          skip: 0,
          limit: 3,
        },
        result: "/products?limit=3",
      },
      {
        paging: {
          skip: 9,
          limit: 3,
        },
        result: "/products?limit=3&skip=9",
      },
    ];
    cases.forEach((item) => {
      const str = buildGetProductCategoryUrl(item);
      expect(str).toBe(item.result);
    });
  });
});

describe("buildGetProductsUrl", () => {
  it("it must build and return product url", () => {
    const cases = [
      {
        query: "MacBook",
        paging: {
          skip: 0,
          limit: 9,
        },
        result: "/products/search?q=MacBook&limit=9",
      },
      {
        query: "",
        paging: {},
        result: "/products",
      },
    ];

    cases.forEach((item) => {
      const str = buildGetProductsUrl(item);
      expect(str).toBe(item.result);
    });
  });
});
