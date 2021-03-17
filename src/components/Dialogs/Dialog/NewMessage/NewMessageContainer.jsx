import { connect } from 'react-redux';
import NewMessage from './NewMessage';
import { updateNewMessageActionCreator, sendMessageActionCreator } from "./../../../../redux/reducers/dialogsReducer";


let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.dialogs[0].newMessageText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    addMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  };
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);


export default NewMessageContainer;
