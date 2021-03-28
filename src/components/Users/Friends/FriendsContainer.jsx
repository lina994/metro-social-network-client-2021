import { connect } from 'react-redux';
import Friends from './Friends';
import { addNewFriendActionCreator, removeFriendActionCreator } from "./../../../redux/reducers/friendsReducer";


let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addFriend: (userInfo) => {
      dispatch(addNewFriendActionCreator(userInfo));
    },
    removeFriend: (userId) => {
      dispatch(removeFriendActionCreator(userId));
    }
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;