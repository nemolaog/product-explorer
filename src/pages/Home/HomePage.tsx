import { Link } from 'react-router-dom';

/**
 * HomePage component
 * Landing page of the application
 */
function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to Nemolaog Product Catalog
            </h1>

            <p className="text-lg text-gray-600 mb-8">
                Explore our products and discover great deals
            </p>

            {/* Navigation button to products page */}
            <Link
                to="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
                Browse Products
            </Link>

        </div>
    );
}

export default HomePage;