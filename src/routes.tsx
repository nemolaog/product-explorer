import { createBrowserRouter } from 'react-router-dom';
import ProductsPage from './pages/ProductDetail/ProductsPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductsPage />,
    },
]);

export default router;