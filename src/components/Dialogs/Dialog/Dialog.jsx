import React from 'react';
import s from './Dialog.module.css';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

function Dialog(props) {
  return (
    <div className={s.dialog}>
      <MessagesList />
      <NewMessage />
    </div>
  );
}

export default Dialog;