import React from 'react';
import s from './NewMessage.module.css';

import { newMessageChangeActionCreator, addMessageActionCreator } from "./../../../../store";

function handleNewMessageChange(element, dispatch) {
  let value = element.current.value;
  let action = newMessageChangeActionCreator(value);
  dispatch(action);
}

function handleSend(element, dispatch) {
  let action = addMessageActionCreator();
  dispatch(action);
  element.current.focus();
}


function NewMessage(props) {
  let newMessageElement = React.createRef();
  return (
    <div className={s.newMessageWrapper}>
      <div>
        <textarea className={s.messageInput} 
                  ref={newMessageElement} 
                  placeholder="Send a message..."
                  value={props.newMessageText}
                  onChange={() => handleNewMessageChange(newMessageElement, props.dispatch)} >
        </textarea>
      </div>
      <button className={s.sendButton} onClick={() => handleSend(newMessageElement, props.dispatch)}>Send</button>
    </div>
  );
}

export default NewMessage;