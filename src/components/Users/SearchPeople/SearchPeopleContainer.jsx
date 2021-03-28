import { connect } from 'react-redux';
import SearchPeople from './SearchPeople';
import { addNewFriendActionCreator, removeFriendActionCreator } from "./../../../redux/reducers/searchPeopleReducer";


let mapStateToProps = (state) => {
  return {
    users: state.searchPeoplePage.users
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

const SearchPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPeople);


export default SearchPeopleContainer;
