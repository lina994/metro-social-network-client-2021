import React from 'react';
import s from './NewMessage.module.css';

import { newMessageChangeActionCreator, sendMessageActionCreator } from "./../../../../redux/reducers/dialogsReducer";

function handleNewMessageChange(e, dispatch) {
  // let value = element.current.value;
  let value = e.target.value;
  let action = newMessageChangeActionCreator(value);
  dispatch(action);
}

function handleSend(element, dispatch) {
  let action = sendMessageActionCreator();
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
                  onChange={(e) => handleNewMessageChange(e, props.dispatch)} >
        </textarea>
      </div>
      <button className={s.sendButton} onClick={() => handleSend(newMessageElement, props.dispatch)}>Send</button>
    </div>
  );
}

export default NewMessage;
