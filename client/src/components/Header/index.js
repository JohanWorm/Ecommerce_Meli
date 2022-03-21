import React from 'react';
import { Logo } from 'src/components/Logo';
import { SearchBox } from 'src/components/SearchBox';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className='header__nav container'>
                <Logo />
                <SearchBox />
            </nav>
        </header>
    );
}

export { Header };