import profileImage2 from './../../resources/profile_image2.jpg';
import profileImage3 from './../../resources/profile_image3.jpg';
import profileImage4 from './../../resources/profile_image4.jpg';

const NEW_MESSAGE_CHANGE = 'NEW-MESSAGE-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  contacts: [
    {
      userId: 2,
      name: "Leo",
      imgSrc: profileImage2
    },
    {
      userId: 3,
      name: "Grey",
      imgSrc: profileImage3
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: profileImage4
    }
  ],
  dialogs: [
    {
      userId: 2,
      name: "Leo",
      imgSrc: profileImage2,
      messages: [
        {
          messageId: 1,
          from: "Leo",
          data: "15/2/21, 13:00",
          text: "Hi!",
          recieved: true
        },
        {
          messageId: 2,
          from: "Leo",
          data: "15/2/21, 14:00",
          text: "Hi!!",
          recieved: true
        }
      ],
      newMessageText: ""
    },
    {
      userId: 3,
      name: "Grey",
      imgSrc: profileImage3,
      messages: [
        {
          messageId: 1,
          from: "Grey",
          data: "14/2/21, 14:00",
          text: "Good morning!",
          recieved: true
        }
      ],
      newMessageText: ""
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: profileImage4,
      messages: [
        {
          messageId: 1,
          from: "Flora",
          data: "14/2/21, 14:00",
          text: "Good morning!",
          recieved: true
        }
      ],
      newMessageText: ""
    }
  ]
};

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

export function dialogsReducer(state = initialState, action) {
  switch (action.type) {
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

