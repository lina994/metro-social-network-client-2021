import React from 'react';
import s from './Dialog.module.css';
import MessagesList from './MessagesList/MessagesList';
import NewMessageContainer from './NewMessage/NewMessageContainer';

function Dialog(props) {
  return (
    <div className={s.dialog}>
      <MessagesList dialog={props.dialog} />
      <NewMessageContainer newMessageText={props.dialog.newMessageText} store={props.store} />
    </div>
  );
}

export default Dialog;
