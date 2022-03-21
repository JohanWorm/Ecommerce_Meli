import { HomePage } from './pages/HomePage';
import { ProductDetail } from './pages/ProductDetailPage';
import { SearchResults } from './pages/SearchResultsPage';

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
    }
];

export default routes;