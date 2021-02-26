import React from 'react';
import s from './Contacts.module.css';
import Contact from './Contact/Contact';

function Contacts(props) {
  // const contacts = props.contacts.map((contact, index) => <Contact key={index} index={index} contact={contact} />);
  const contacts = props.contacts.map((contact, index) => <Contact key={index} contact={contact} />);
  return (
    <div className={s.contacts}>
      {contacts}
    </div>
  );
}

export default Contacts;