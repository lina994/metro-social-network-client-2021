import React from 'react';
import s from './Header.module.css';


function Header(props) {
  return (
    <header className={s.appHeader}>
      <div className={s.m7LogoWrapper}>
        <img className={s.m7Logo} src={props.header.logo.imgSrc} alt={props.header.logo.imgAlt} />
      </div>
    </header>
  );
}

export default Header;