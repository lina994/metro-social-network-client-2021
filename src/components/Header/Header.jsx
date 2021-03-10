import React from 'react';
import s from './Header.module.css';

import logoImage from './../../resources/logo/m7_logo.svg';

function Header(props) {
  return (
    <header className={s.appHeader}>
      <div className={s.m7LogoWrapper}>
        <img className={s.m7Logo} src={logoImage} alt="Metro7 logo" />
      </div>
    </header>
  );
}

export default Header;