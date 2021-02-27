import React from 'react';
import s from './NewMessage.module.css';

function handleSend(element, addMessage) {
  // TODO - implement this function
  let value = element.current.value;
  addMessage(value);
  // alert('Hello world ' + value);
}


function NewMessage(props) {
  let newMessageElement = React.createRef();
  return (
    <div className={s.newMessageWrapper}>
      <div>
        <textarea className={s.messageInput} ref={newMessageElement} placeholder="Send a message..."></textarea>
      </div>
      <button className={s.sendButton} onClick={()=>handleSend(newMessageElement, props.addMessage)}>Send</button>
    </div>
  );
}

export default NewMessage;