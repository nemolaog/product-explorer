import { createBrowserRouter } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductsPage />,
    },
]);

export default router;