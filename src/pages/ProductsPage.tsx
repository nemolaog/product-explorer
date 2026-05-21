import { mockProducts } from '../data/products';

function ProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
                eBay Product Catalog
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockProducts.map(product => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg line-clamp-2 h-12">
                                {product.title}
                            </h3>
                            <p className="text-2xl font-bold text-blue-600 mt-2">
                                ${product.price}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                {product.category}
                            </p>
                            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;