const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';


function newMessageChange(state, text) {
  state.dialogs[0].newMessageText = text;
  return state;
}

function sendMessage(state) {  // TODO - add messages to currect dialog, messageId, from, data
  let text = state.dialogs[0].newMessageText;
  state.dialogs[0].messages.push(
    {
      messageId: 1,
      from: "Oscar",
      data: "15/2/21, 13:00",
      text: text,
      recieved: false
    }
  );
  state.dialogs[0].newMessageText = "";
  return state;
}

export function dialogsReducer(state, action) {
  switch(action.type) {
    case NEW_MESSAGE_CHANGE:
      state = newMessageChange(state, action.text);
      break;
    case SEND_MESSAGE:
      state = sendMessage(state);
      break;
  }
  return state;
}

export function newMessageChangeActionCreator(value) {
  return {
    type: NEW_MESSAGE_CHANGE,
    text: value
  };
}

export function sendMessageActionCreator() {
  return {
    type: SEND_MESSAGE
  };
}

