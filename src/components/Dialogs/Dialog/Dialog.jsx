import React from 'react';
import s from './Dialog.module.css';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

function Dialog(props) {
  return (
    <div className={s.dialog}>
      <MessagesList dialog={props.dialog} />
      <NewMessage newMessageText={props.dialog.newMessageText} dispatch={props.dispatch} />
    </div>
  );
}

export default Dialog;
