import React from 'react';
import { BreadCrumb } from 'src/components/BreadCrumb';
import './style.scss';

const BreadCrumbs = (props) => {
  return (
    <ul className='bread__crumbs'>
      {props.categories.map((category, key) => <BreadCrumb key={key} name={category}></BreadCrumb>)}
    </ul>
  );
}

export { BreadCrumbs };