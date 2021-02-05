import React from 'react';
import s from './Header.module.css';

import logo from '../../resources/logo/m7_logo3.svg'

function Header(props) {
  return (
    <header className={s.appHeader}>
      <div className={s.m7LogoWrapper}>
        <img className={s.m7Logo} src={logo} alt="Metro7 logo" />
      </div>
    </header>
  );
}

export default Header;