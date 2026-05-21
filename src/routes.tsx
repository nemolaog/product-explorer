import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ProductsPage from './pages/ProductsPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ProductsPage />,
            },
            // description page and shopping cart
        ],
    },
]);

export default router;