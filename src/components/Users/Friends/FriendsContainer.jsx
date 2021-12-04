import { connect } from 'react-redux';
import Friends from './Friends';
import { addNewFriendActionCreator, removeFriendActionCreator, showMoreFriendActionCreator } from "./../../../redux/reducers/friendsReducer";


let mapStateToProps = (state) => {
  return {
    id: state.authenticationPage.id,
    token: state.authenticationPage.token,
    users: state.friendsPage.users,
    page: state.friendsPage.page
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addFriend: (userInfo) => {
      dispatch(addNewFriendActionCreator(userInfo));
    },
    removeFriend: (userId) => {
      dispatch(removeFriendActionCreator(userId));
    },
    showMore: (users) => {
      dispatch(showMoreFriendActionCreator(users));
    }
  };
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;