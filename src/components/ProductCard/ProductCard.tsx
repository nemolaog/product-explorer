import { ProductCardProps } from './ProductCard.types';
import { Link } from "react-router-dom";

/**
 * ProductCard component
 * Responsible for displaying individual product information
 */
function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            to={`/products/${product.id}`} className="block"
        >
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all">
            {/* Product image */}
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
            />

                <div className="p-4">

                    {/* Product title */}
                    <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">
                        {product.title}
                    </h3>

                    {/* Product price */}
                    <p className="text-2xl font-bold text-blue-600 mt-2">
                        ${product.price.toFixed(2)}
                    </p>

                    {/* Product category */}
                    <p className="text-sm text-gray-500 mt-1">
                        {product.category}
                    </p>

                    {/* Add to cart button */}
                    <button
                        className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>

            </div>
        </Link>
    );
}

export default ProductCard;