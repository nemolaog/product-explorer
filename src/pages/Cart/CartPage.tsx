import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

/**
 * CartPage component
 * Displays all products currently added to the shopping cart.
 */
function CartPage() {
    const items = useCartStore((state) => state.items);
    const totalItems = useCartStore((state) => state.totalItems);
    const totalAmount = useCartStore((state) => state.totalAmount);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const clearCart = useCartStore((state) => state.clearCart);
    /**
     * Renders an empty cart message when there are no cart items.
     */
    if (items.length === 0) {
        return(
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Shopping Cart
                </h1>

                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                    <p className="text-xl text-gray-700 mb-6">
                        Your cart is empty.
                    </p>
                </div>
                <Link
                    to="/products"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Browse Products
                </Link>
            </div>
        )
    }
return (
    <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
                Shopping Cart
            </h1>

            {/* Clears all cart items */}
            <button
                type="button"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
            >
                Clear Cart
            </button>
        </div>
    <div className="space-y-4">
        {items.map((item) => (
            <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4"
            >
                {/* Product image */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                    {/* Product title */}
                    <h2 className="text-xl font-semibold text-gray-900">
                        {item.title}
                    </h2>
                    {/* Product category */}
                    <p className="text-sm text-gray-500 mt-1">
                        {item.category}
                    </p>
                    {/* Product price */}
                    <p className="text-lg font-bold text-blue-600 mt-2">
                        ${item.price.toFixed(2)}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                type="button"
                                onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                }
                                className="px-3 py-2 hover:bg-gray-100 transition"
                            >
                                -
                            </button>
                            <span className="px-4 py-2 border-x border-gray-300">
                                        {item.quantity}
                                    </span>
                            <button
                                type="button"
                                onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                }
                                className="px-3 py-2 hover:bg-gray-100 transition"
                            >
                                +
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                    </div>
                </div>
                {/* Item subtotal */}
                <div className="md:text-right">
                    <p className="text-sm text-gray-500">
                        Subtotal
                    </p>

                    <p className="text-2xl font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>
            </div>
        ))}
    </div>
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between text-lg text-gray-700 mb-2">
                <span>Total Items</span>
                <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold text-gray-900">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>

            <button
                type="button"
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Checkout
            </button>
        </div>
    </div>
)
}
export default CartPage;








