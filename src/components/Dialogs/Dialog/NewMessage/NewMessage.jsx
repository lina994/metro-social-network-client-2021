import React from 'react';
import s from './NewMessage.module.css';


function handleNewMessageChange(e, updateMessage) {
  let value = e.target.value;
  updateMessage(value);
}

function handleSend(element, addMessage) {
  addMessage();
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
                  onChange={(e) => handleNewMessageChange(e, props.updateMessage)} >
        </textarea>
      </div>
      <button className={s.sendButton} onClick={() => handleSend(newMessageElement, props.addMessage)}>Send</button>
    </div>
  );
}

export default NewMessage;
