import axios from 'axios';
import { apiConfig } from '../config/config';

const meliInstance = axios.create({
    baseURL: `${apiConfig.apiMeli.url}`
});


const getListItems = async (query, limit, next) => {
    try {
        const responseApiMeli = await meliInstance.get(`${apiConfig.apiMeli.region}/search?q=${query}&limit=${limit}`);
        const response = {
            items: [],
            categories: []
        };

        if (responseApiMeli) {
            if (responseApiMeli.data.results && responseApiMeli.data.results.length) {
                responseApiMeli.data.results.map((result) => {
                    response.items.push(_getItemModel(result));
                });
            }
            if (responseApiMeli.data.filters && responseApiMeli.data.filters.length) {
                response.categories = _getCategoriesModel(responseApiMeli.data.filters);
            }
        }
        return response;
    } catch (e) {
        next(new Error(e.message));
    }
};

const getItemDetail = async (id, next) => {
    try {
        const [responseApiMeliId, responseApiMeliDescription] = await Promise.all([
            meliInstance.get(`items/${id}`),
            meliInstance.get(`items/${id}/description`)
        ]);
        const response = {
            item: null
        };

        if (responseApiMeliId && responseApiMeliDescription) {
            response.item = _getItemModel(responseApiMeliId.data, responseApiMeliDescription.data);
        }
        return response;
    } catch (e) {
        next(new Error(e.message));
    }
};

const _getItemModel = (dataItem, description) => {
    const item = {
        id: dataItem.id,
        title: dataItem.title,
        price: {
            currency: dataItem.currency_id,
            amount: _getPriceModel(dataItem),
            decimals: _getPriceModel(dataItem, true)
        },
        picture: dataItem.thumbnail,
        condition: dataItem.condition,
        free_shipping: _getShippingModel(dataItem.shipping),
    }

    if (dataItem.address) {
        item.city = dataItem.address.city_name;
    }

    if (description) {
        item.sold_quantity = dataItem.sold_quantity;
        item.description = description.plain_text;
        item.picture = dataItem.pictures[0].secure_url
    }

    return item;
}

const _getCategoriesModel = (filters) => {
    const categories = [];

    if (filters && filters.length) {
        if (filters[0].id === 'category' && filters[0].values.length && filters[0].values[0].path_from_root.length) {
            filters[0].values[0].path_from_root.map((filter) => {
                categories.push(filter.name);
            });
        }
    }

    return categories;
}

const _getShippingModel = (shipping) => {
    if (shipping && shipping.free_shipping !== null) {
        return shipping.free_shipping;
    }
    return false;
}

const _getPriceModel = (dataItem, onlyDecimals) => {
    if (!isNaN(Number(dataItem.price))) {
        const price = dataItem.price.toString().split('.');
        return onlyDecimals ? (price.length > 1 ? price[1] : '00') : price[0];
    }
    return 0;
}

const itemsModel = {
    getListItems, getItemDetail
};

export { itemsModel };