import React from 'react';
import s from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={s.appNavbar}>
      <div className={s.navLinkWrapper}>Profile</div>
      <div className={s.navLinkWrapper}>Messages</div>
      <div className={s.navLinkWrapper}>News</div>
      <div className={s.navLinkWrapper}>Music</div>
      <div className={s.navLinkWrapper}>Settings</div>
    </nav>
  );
}

export default Navbar;