/**
 * Sort options available for product listing.
 */
export type SortOption = 'default' | 'price-low-high' | 'price-high-low';

/**
 * Props for ProductFilters component.
 */
export interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  sortOption: SortOption;
  onCategoryChange: (category: string) => void;
  onSortChange: (sortOption: SortOption) => void;
}