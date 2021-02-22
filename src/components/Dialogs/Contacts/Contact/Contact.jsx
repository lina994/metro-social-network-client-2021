import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Contact.module.css';

function Contact(props) {
  return (
    <div className={s.contact}>
      <NavLink to={'/dialogs/'+props.contact.userId} className={s.link} activeClassName={s.activeDialog}>
        <div className={s.avatarWrapper}>
          <img className={s.avatar} src={props.contact.imgSrc} alt="profile avatar" />
        </div>
        <div className={s.name}>
          {props.contact.name}
        </div>
      </NavLink>
    </div>
  );
}

export default Contact;