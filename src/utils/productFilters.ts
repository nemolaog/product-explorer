import { Product } from '../types';
import { SortOption } from "../components/ProductFilters/ProductFilters.type.ts";

interface FilterProductsParams {
  products: Product[];
  searchQuery: string;
  selectedCategory: string;
  sortOption: SortOption;
}

/**
 * Filters and sorts product data based on search query, selected category, and sort option.
 * This keeps product filtering logic reusable and separate from page UI logic.
 */
export function filterProducts({
                                 products,
                                 searchQuery,
                                 selectedCategory,
                                 sortOption,
                               }:FilterProductsParams):Product[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  let filteredProducts = products.filter((product) => {
    const title = product.title.toLowerCase();
    const category = product.category.toLowerCase();
    const description = product.description.toLowerCase();

    const matchesSearch =
      !normalizedQuery ||
      title.includes(normalizedQuery) ||
      category.includes(normalizedQuery) ||
      description.includes(normalizedQuery);

    const matchesCategory =
      selectedCategory === 'all' ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortOption === 'price-low-high') {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === 'price-high-low') {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return filteredProducts;
}

/**
 * Extracts unique product categories from product data.
 */
export function getProductCategories(products: Product[]): string[] {
  return Array.from(
    new Set(products.map((product) => product.category))
  );
}




