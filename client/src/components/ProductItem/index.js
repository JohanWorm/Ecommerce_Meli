import React, { useState, useEffect } from 'react';
import { ProductImage } from 'src/components/ProductImage';
import { ProductAmount } from 'src/components/ProductAmount';
import freeShippingLogo from 'src/assets/images/ic_shipping.png';
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
                        <span className='product__item--data-price--currency cursor-pointer'>
                            {props.data.price.currency}
                        </span>
                        <span className='product__item--data-price--amount cursor-pointer'>
                            <ProductAmount size='small' price={props.data.price} />
                        </span>
                        {props.data.free_shipping && <img className="free-shipping-icon" src={freeShippingLogo} alt="Envío gratis" />}
                    </div>
                    <div className='product__item--data-location'>
                        {props.data.city}
                    </div>
                    <div onClick={goToDetail} className='product__item--data-description cursor-pointer'>
                        {props.data.title}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ProductItem };