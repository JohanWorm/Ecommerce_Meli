import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ProductItem } from 'src/components/ProductItem'
import { environment } from 'src/core/config/environment';
import { endpoints } from 'src/core/endpoints/items';
import { BreadCrumbs } from 'src/components/BreadCrumbs';
import './style.scss';

const SearchResults = () => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const location = useLocation();

    const requestItemsList = () => {
        const paramsRequest = new URLSearchParams();
        paramsRequest.set('q', searchValue);
        paramsRequest.set('limit', 4);
        axios.get(`${environment.apiUrl}${endpoints.items}?${paramsRequest.toString()}`)
            .then(response => {
                if (response && response.data) {
                    if (response.data.categories) {
                        setCategories(response.data.categories);
                    }
                    if (response.data.items) {
                        setItems(response.data.items);
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (searchValue.trim() && searchValue.trim().length) {
            requestItemsList();
        }
    }, [searchValue]);

    useEffect(() => {
        const search = new URLSearchParams(location.search).get('search');
        setSearchValue(search);
    }, [location]);

    return (
        <div className='container h-100 search__results'>
            <BreadCrumbs categories={categories} />
            <div className='search__results--list h-100'>
                {items.map((data, i) =>
                    <ProductItem key={i} data={data} categories={categories} />
                )}
                {!items.length && <h2 className='search__results--empty'>Sin resultados para tu búsqueda...</h2>}
            </div>
        </div>
    );
}

export { SearchResults };