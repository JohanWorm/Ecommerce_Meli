import { apiConfig } from '../config/config';
import { itemsModel } from '../models/items.model'

const getListItems = async (query, limit) => {
    const response = {
        author: apiConfig.getAuthor(),
        categories: [],
        items: []
    }
    const dataService = await itemsModel.getListItems(query, limit);

    if (dataService.categories && dataService.categories.length) {
        response.categories = dataService.categories;
    }

    if (dataService.categories && dataService.categories.length) {
        response.items = dataService.items;
    }

    return response;
};

const getItemDetail = async (id) => {
    const response = {
        author: apiConfig.getAuthor(),
        item: null
    }
    const dataService = await itemsModel.getItemDetail(id);

    if (dataService && dataService.item) {
        response.item = dataService.item;
    }

    return response;
}
const itemsService = {
    getListItems, getItemDetail
};

export { itemsService };
