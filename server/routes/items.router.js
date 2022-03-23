import express from 'express';
import { itemsService } from '../services/items.service';

const routerItem = express.Router();

routerItem.get('/', async (req, res, next) => {
  try {
    const query = req.query.q;
    const limit = req.query.limit || 4;
    if (!!query) {
      const response = await itemsService.getListItems(query, limit, next);
      res.status(200).send(response);
    } else {
      res.status(400).send({
        error: 'Búsqueda incorrecta'
      });
    }
  } catch (e) {
    next(new Error(e));
  }
});

routerItem.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!!id) {
      const response = await itemsService.getItemDetail(id, next);
      res.status(200).send(response);
    } else {
      res.status(400).send({
        error: 'Producto incorrecto'
      });
    }
  } catch (e) {
    next(new Error(e));
  }
});

export { routerItem };