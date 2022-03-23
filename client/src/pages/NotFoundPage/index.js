import React from 'react';
import './style.scss';

const NotFound = () => {
  return (
    <div className='container h-100'>
      <div className='not__found h-100'>
        <h2 className='not__found--message'>¡Ups! Página no encontrada</h2>
      </div>
    </div>
  );
}

export { NotFound };