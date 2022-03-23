import React, { useState, useEffect } from 'react';
import { currencyFormat, roundAmount } from 'src/core/resources/utils';
import './style.scss';

const ProductAmount = (props) => {

  const [amount, setAmount] = useState('');
  const [decimals, setDecimals] = useState('');

  useEffect(() => {
    if (props.price && props.price.amount) {
      if (props.size === 'small') {
        setAmount(
          currencyFormat(
            roundAmount(props.price.amount, props.price.decimals)
          )
        );
      } else {
        setAmount(
          currencyFormat(props.price.amount)
        );
        setDecimals(props.price.decimals);
      }
    }
  }, [props]);

  return (
    <span className='amount'>
      {amount}
      <span className='amount__decimals'>
        {decimals}
      </span>
    </span >
  );
}

export { ProductAmount };