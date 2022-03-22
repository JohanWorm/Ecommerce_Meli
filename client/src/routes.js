import { HomePage } from './pages/HomePage';
import { ProductDetail } from './pages/ProductDetailPage';
import { SearchResults } from './pages/SearchResultsPage';
import { NotFound } from './pages/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/items',
        exact: true,
        component: SearchResults
    },
    {
        path: '/items/:id',
        exact: true,
        component: ProductDetail
    },
    {
        component: NotFound
    }
];

export default routes;