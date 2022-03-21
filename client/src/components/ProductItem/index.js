import React, { useState, useEffect } from 'react';
import { ProductImage } from 'src/components/ProductImage';
import { ProductAmount } from 'src/components/ProductAmount';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './style.scss';

const ProductItem = (props) => {

    const urlDetail = `/items/${props.data.id}`;
    let history = useHistory();

    const goToDetail = () => {
        history.push({
            pathname: `${urlDetail}`,
            state: {
                categories: props.categories
            }
        });
    };

    return (
        <div className='product__item'>
            <div className='product__item--content'>
                <ProductImage onClick={goToDetail} src={props.data.picture} />
                <div className='product__item--data'>
                    <div onClick={goToDetail} className='product__item--data-price'>
                        <span className='product__item--data-price--currency'>
                            {props.data.price.currency}
                        </span>
                        <span className='product__item--data-price--amount'>
                            <ProductAmount size='small' price={props.data.price} />
                        </span>
                    </div>
                    <div className='product__item--data-location'>
                        {props.data.city}
                    </div>
                    <div onClick={goToDetail} className='product__item--data-description'>
                        {props.data.title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ProductItem };