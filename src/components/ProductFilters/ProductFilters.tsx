import { ChangeEvent } from 'react';
import { ProductFiltersProps, SortOption } from './ProductFilters.type.ts';

/**
 * ProductFilters component
 * Provides category filtering and product sorting controls.
 */

function ProductFilters({
                          categories,
                          selectedCategory,
                          sortOption,
                          onCategoryChange,
                          onSortChange,

                        }:ProductFiltersProps){
  /**
   * Handles category select changes.
   */
  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    onCategoryChange(event.target.value);
  }
  /**
   * Handles sort select changes.
   */
  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    onSortChange(event.target.value as SortOption);
  }
  return(
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      {/* Category filter */}
      <div className="flex-1">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-2"
        >Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Categories</option>
          {categories.map((category)=>(
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Sort control */}
    <div className="flex-1">
      <label
        htmlFor="sort"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Sort By
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="default">Default</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
    </div>

    </div>
  )
}

export default ProductFilters;



