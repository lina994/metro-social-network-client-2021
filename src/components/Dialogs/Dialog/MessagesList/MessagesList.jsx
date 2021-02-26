import React from 'react';
import s from './MessagesList.module.css';
import Message from './Message/Message';

function MessagesList(props) {
  const messages = props.dialog.messages.map((message, index) => <Message key={index} message={message} />);

  return (
    <div className={s.messagesList}>
      {/* MessagesList */}
      {messages}
    </div>
  );
}

export default MessagesList;