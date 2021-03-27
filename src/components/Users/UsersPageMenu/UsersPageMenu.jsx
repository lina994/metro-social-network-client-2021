import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UsersPageMenu.module.css';


function UsersPageMenu(props) {
  return (
    <div className={s.usersPageMenuWrapper}>
      <div className={s.navLinkWrapper}>
        <NavLink to='/users/my_friends' className={s.link} activeClassName={s.activeNavLink}>My Friends</NavLink>
      </div>
      <div className={s.navLinkWrapper}>
        <NavLink to='/users/search_people' className={s.link} activeClassName={s.activeNavLink}>Search People</NavLink>
      </div>
    </div>
  );
}

export default UsersPageMenu;

