import React from 'react';
import './style.scss';

const ProductImage = (props) => {
  return (
    <img className='product__image' src={props.src} alt='Imágen producto' />
  );
}

export { ProductImage };