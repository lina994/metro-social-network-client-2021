import React from 'react';
import s from './Header.module.css';


function Header(props) {
  return (
    <header className={s.appHeader}>
      <div className={s.m7LogoWrapper}>
        <img className={s.m7Logo} src={props.header.logo} alt="Metro7 logo" />
      </div>
    </header>
  );
}

export default Header;