import React from 'react';
import s from './Contacts.module.css';
import Contact from './Contact/Contact';

function Contacts(props) {
  let contacts = props.contacts.map((contact, index) => <Contact key={index} contact={contact} />);
  return (
    <div className={s.contacts}>
      {contacts}
    </div>
  );
}

export default Contacts;