import {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {mockProducts} from "../../data/products"
import {useCartStore} from '../../store/cartStore';

/**
 * ProductDetailPage component
 * Displays detailed information for a selected product
 */

function ProductDetailPage() {
  // Get dynamic route parameter from URL
  const {id} = useParams();

  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  // Convert route param from string to number
  const productID = Number(id);

  // Find the matching product from mock data
  const product = mockProducts.find((item) => item.id === productID);

  // Render fallback UI when product does not exist
  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The product you are looking for does not exist.
        </p>
        <Link to="/product"
              className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Products
        </Link>
      </div>
    )
  }

  /**
   * Adds the selected product to the global cart store
   * and shows a short visual feedback to the user.
   */
  function handleAddToCart() {
    // one more check to prevent product is defined
    if (!product) {
      return
    }
    addItem(product);
    setIsAdded(true);

    window.setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/*Back navigation*/}
      <Link to="/products"
            className="inline-block text-blue-600 hover:text-blue-700 mb-6"
      >
        ← Back to Products
      </Link>

      {/* Product detail layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm overflow-hidden">

        {/* Product image */}
        <div className="bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product information */}
        <div className="p-6 flex flex-col">

          {/* Product category */}
          <p className="text-sm text-gray-500 mb-2">
            {product.category}
          </p>

          {/* Product title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Product price */}
          <p className="text-4xl font-bold text-blue-600 mb-4">
            ${product.price.toFixed(2)}
          </p>

          {/* Product rating */}
          <p className="text-gray-600 mb-6">
            Rating: {product.rating.rate} / 5 · {product.rating.count} reviews
          </p>

          {/* Product description */}
          <p className="text-gray-700 leading-7 mb-8">
            {product.description}
          </p>

          {/* Add to cart button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`mt-auto w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-200 transform active:scale-95 active:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isAdded
                ? 'bg-green-600 text-white shadow-green-200 hover:bg-green-700 focus-visible:ring-green-500'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg focus-visible:ring-blue-500'
            }`}
          >
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )

}

export default ProductDetailPage;