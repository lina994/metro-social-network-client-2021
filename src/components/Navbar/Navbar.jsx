import React from 'react';
import s from './Navbar.module.css';

function Navbar(props) {
  return (
    <nav className={s.appNavbar}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
  );
}

export default Navbar;