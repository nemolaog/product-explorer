import {createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/HomePage.tsx';
import ProductsPage from './pages/Products/ProductsPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import CartPage from './pages/Cart/CartPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'cart',
                element: <CartPage />,//cart
            },
            {
                path: '/',
                element: <Home/>, // homepage
            },
            {
                path: '/products',
                element: <ProductsPage/>, // product list page
            },
            {
                path: '/products/:id',
                element: <ProductDetailPage/>, // solo product page
            },
            {
                path: '*', // 404
                element: <NotFound/>,
            },
        ]
    }
]);

export default router;