import React from 'react';
import './style.scss';
import logo2x from 'assets/images/Logo_ML@2x.png.png.png';

const HomePage = () => {
  return (
    <div className='container h-100'>
      <div className='home h-100'>
        <img src={logo2x} alt='Logo'></img>
        <h1 className='home__title'>Bienvenido</h1>
        <p className='home__message'>Inicia una búsqueda, por favor.</p>
      </div>
    </div>
  );
}

export { HomePage };