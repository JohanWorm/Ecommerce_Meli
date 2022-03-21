import React from 'react';
import iconSearch from 'assets/images/ic_Search.png';
import iconSearch2x from 'assets/images/ic_Search@2x.png.png.png';
import './style.scss';

const ProductImage = (props) => {
    return (
        <img className='product__image' src={props.src} />
    );
}

export { ProductImage };