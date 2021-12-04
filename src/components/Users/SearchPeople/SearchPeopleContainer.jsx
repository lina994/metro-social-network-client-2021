import { connect } from 'react-redux';
import SearchPeople from './SearchPeople';
import { addNewFriendActionCreator, removeFriendActionCreator } from "./../../../redux/reducers/friendsReducer";
import { showMoreUsersActionCreator } from "./../../../redux/reducers/searchPeopleReducer";

let mapStateToProps = (state) => {
  return {
    token: state.authenticationPage.token,
    users: state.searchPeoplePage.users,
    page: state.searchPeoplePage.page
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
      dispatch(showMoreUsersActionCreator(users));
    }
  };
};

const SearchPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPeople);


export default SearchPeopleContainer;
