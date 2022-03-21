import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from 'assets/images/Logo_ML.png';
import logo2x from 'assets/images/Logo_ML@2x.png.png.png';
import 'src/assets/styles/global.scss';
import './style.scss';

const Logo = () => {
    
    let history = useHistory();

    const goToHome = () => {
        history.push(`/`);
    };

    return (
        <img className="logo h-100" src={logo2x} alt="Logo" onClick={goToHome} />
    );
}

export { Logo };