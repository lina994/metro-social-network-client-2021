import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthPageMenu.module.css';


function AuthPageMenu(props) {
  return (
    <div className={s.authPageMenuWrapper}>
      <div className={s.navLinkWrapper}>
        <NavLink to='/log_in' className={s.link} activeClassName={s.activeNavLink}>Log In</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/sign_up' className={s.link} activeClassName={s.activeNavLink}>Sign Up</NavLink>
      </div>
    </div>
  );
}

export default AuthPageMenu;