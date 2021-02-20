import React from 'react';
import s from './Dialogs.module.css';
import Contacts from './Contacts/Contacts';
import Dialog from './Dialog/Dialog';

function Dialogs(props) {
  return (
    <section className={s.appDialogs}>
      <Contacts contacts={props.dialogsPage.contacts} />
      <Dialog />
    </section>
  );
}

export default Dialogs;