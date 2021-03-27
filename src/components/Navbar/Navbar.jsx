import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={s.appNavbar}>
      <div className={s.navLinkWrapper}>
        <NavLink to='/profile' className={s.link} activeClassName={s.activeNavLink}>Profile</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/dialogs' className={s.link} activeClassName={s.activeNavLink}>Dialogs</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/users/my_friends' className={s.link} activeClassName={s.activeNavLink}>Friends</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/news' className={s.link} activeClassName={s.activeNavLink}>News</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/music' className={s.link} activeClassName={s.activeNavLink}>Music</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/settings' className={s.link} activeClassName={s.activeNavLink}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;