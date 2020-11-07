import React from 'react';
import logo from '../../assets/img/logo.png';
import styles from './header.module.css';

const Header = () => (
    <>
        <header>
            <div className={styles.header__logo}>
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>
        </header>
    </>
);


export default Header;