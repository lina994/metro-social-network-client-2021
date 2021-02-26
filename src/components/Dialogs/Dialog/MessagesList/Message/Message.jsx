import React from 'react';
import s from './Message.module.css';

function Message(props) {
  let author = props.message.from;
  let date = props.message.data;
  let text = props.message.text;
  return (
    <div className={s.message}>
      {author + " " + date + " " + text}
    </div>
  );
}

export default Message;