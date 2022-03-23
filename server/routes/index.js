import { routerItem } from './items.router';

const routerApi = (app) => {
  app.use('/api/items', routerItem);
}

export { routerApi };