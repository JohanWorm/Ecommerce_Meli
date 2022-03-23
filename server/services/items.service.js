import { apiConfig } from '../config/config';
import { itemsModel } from '../models/items.model'

const getListItems = async (query, limit, next) => {
  try {
    const response = {
      author: apiConfig.getAuthor(),
      categories: [],
      items: []
    }
    const dataService = await itemsModel.getListItems(query, limit, next);

    if (dataService.categories && dataService.categories.length) {
      response.categories = dataService.categories;
    }

    if (dataService.categories && dataService.categories.length) {
      response.items = dataService.items;
    }

    return response;
  } catch (e) {
    next(new Error(e));
  }
};

const getItemDetail = async (id, next) => {
  try {
    const response = {
      author: apiConfig.getAuthor(),
      item: null
    }
    const dataService = await itemsModel.getItemDetail(id, next);
    if (dataService && dataService.item) {
      response.item = dataService.item;
    }

    return response;
  } catch (e) {
    next(new Error(e));
  }
}
const itemsService = {
  getListItems, getItemDetail
};

export { itemsService };
