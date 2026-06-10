import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import useScrollDirection from "../../hooks/useScrollDirection.ts";
/**
 * Header component
 * Displays main navigation and current cart item count.
 */

function Header() {
    const totalItems = useCartStore((state) => state.totalItems);
    const scrollDirection = useScrollDirection();
    const headerVisibilityClass =
      scrollDirection === 'down'
        ? '-translate-y-full'
        : 'translate-y-0';
    return(
        <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${headerVisibilityClass}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* App logo / home link */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-gray-900"
                >
                    Product Explorer
                </Link>

                {/* Main navigation */}
                <nav>
                    <Link to="/products"
                          className="text-gray-700 hover:text-blue-600 transition"
                    >
                        <button className="px-2 hover:bg-amber-300">Products</button>
                    </Link>
                    <Link
                        to="/cart"
                        className="relative text-gray-700 hover:text-blue-600 transition"
                    >
                        <button className="px-2 hover:bg-amber-300">Cart</button>

                        {/* Cart item count badge */}
                        {totalItems > 0 && (
                            <span className="ml-2 inline-flex items-center justify-center min-w-6 h-6 px-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    )
}
export default Header;

