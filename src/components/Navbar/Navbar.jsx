import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={s.appNavbar}>
      <div className={s.navLinkWrapper}>
        <NavLink to='/profile' activeClassName={s.activeNavLink}>Profile</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/dialogs' activeClassName={s.activeNavLink}>Dialogs</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/news' activeClassName={s.activeNavLink}>News</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/music' activeClassName={s.activeNavLink}>Music</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/settings' activeClassName={s.activeNavLink}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;