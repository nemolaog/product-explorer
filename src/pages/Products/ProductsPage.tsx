import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import {mockProducts} from '../../data/products.ts';
import {useMemo, useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import { SortOption } from '../../components/ProductFilters/ProductFilters.type.ts';


/**
 * ProductsPage component
 * Responsible for rendering the product catalog page
 */
function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  /**
   * Creates a unique category list from product data.
   */
  const categories = useMemo(() => {
    return Array.from(
      new Set(mockProducts.map((product) => product.category))
    );
  }, []);

  /**
   * Resets search, category filter, and sorting to their default values.
   */
  function handleResetFilters() {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortOption('default');
  }

  /**
   * Filters products based on the current search query.
   * The search checks product title, category, and description. and sort option.
   */
  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    let products = mockProducts.filter((product) => {
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
      products = [...products].sort((a, b) => a.price - b.price);
    }

    if (sortOption === 'price-high-low') {
      products = [...products].sort((a, b) => b.price - a.price);
    }

    return products;
  }, [searchQuery, selectedCategory, sortOption]);


  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Product Explorer
      </h1>
      {/* Page description */}
      <p className="text-gray-600 text-center mb-8">
        Search and explore products from the catalog.
      </p>
      {/* Product search input */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search by title, category, or description..."
      />
      {/* Product filter and sort controls */}
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortOption}
        onResetFilters={handleResetFilters}
      />
      {/* Search result count */}
      <p className="text-sm text-gray-500 mb-4">
        Showing {filteredProducts.length} of {mockProducts.length} products
      </p>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            No products found
          </h2>

          <p className="text-gray-600">
            Try changing your search keyword or filter option.
          </p>
        </div>
      )}

    </div>
  );
}

export default ProductsPage;