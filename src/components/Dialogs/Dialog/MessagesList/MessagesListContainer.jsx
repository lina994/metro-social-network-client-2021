import { connect } from 'react-redux';
import MessagesList from './MessagesList';


let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.dialogs[0].messages
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList);


export default MessagesListContainer;
