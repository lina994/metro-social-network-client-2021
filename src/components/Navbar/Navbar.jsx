import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={s.appNavbar}>
      <div className={s.navLinkWrapper}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;