import ProductCard from '../../components/ProductCard/ProductCard';
import { mockProducts } from '../../data/products';

/**
 * ProductsPage component
 * Responsible for rendering the product catalog page
 */
function ProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            {/* Page title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                eBay Product Catalog
            </h1>

            {/* Product grid layout */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {mockProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );
}

export default ProductsPage;