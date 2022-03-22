import React from 'react';
import './style.scss';

const BreadCrumb = (props) => {
    return (
        <li className="bread__crumb cursor-pointer">
            {props.name}
        </li>
    );
}

export { BreadCrumb };