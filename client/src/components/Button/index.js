import React from 'react';
import './style.scss';

const Button = (props) => {

    return (
        <button
            className='btn'
            type={props.type}>
            {props.title}
        </button>
    );
}

export { Button };