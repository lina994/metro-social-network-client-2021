import React from 'react';

import NewMessage from './NewMessage';
import { newMessageChangeActionCreator, sendMessageActionCreator } from "./../../../../redux/reducers/dialogsReducer";


function NewMessageContainer(props) {

  let updateMessage = (text) => {
    let action = newMessageChangeActionCreator(text);
    props.store.dispatch(action);
  };

  let addMessage = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  };

  return (
    <NewMessage newMessageText={props.newMessageText} updateMessage={updateMessage} addMessage={addMessage} />
  );
}

export default NewMessageContainer;
