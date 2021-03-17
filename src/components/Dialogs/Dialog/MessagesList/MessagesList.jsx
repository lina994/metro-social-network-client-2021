import React from 'react';
import s from './MessagesList.module.css';
import Message from './Message/Message';

function MessagesList(props) {
  const messages = props.messages.map((message, index) => <Message key={index} message={message} />);

  return (
    <div className={s.messagesList}>
      {messages}
    </div>
  );
}

export default MessagesList;