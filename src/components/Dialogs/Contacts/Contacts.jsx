import React from 'react';
import s from './Contacts.module.css';
import Contact from './Contact/Contact';

function Contacts(props) {
  return (
    <div className={s.contacts}>
      <Contact />
      <Contact />
    </div>
  );
}

export default Contacts;