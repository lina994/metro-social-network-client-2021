import React from 'react';
import s from './Dialog.module.css';
import MessagesListContainer from './MessagesList/MessagesListContainer';
import NewMessageContainer from './NewMessage/NewMessageContainer';

function Dialog(props) {
  return (
    <div className={s.dialog}>
      <MessagesListContainer />
      <NewMessageContainer />
    </div>
  );
}

export default Dialog;
