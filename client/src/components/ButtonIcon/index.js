import React from 'react';
import './style.scss';

const ButtonIcon = (props) => {

  return (
    <button
      className='btn__icon'
      color={props.color}
      type={props.type}>
      <img src={props.src}
        alt='Icono' />
    </button>
  );
}

export { ButtonIcon };