import { ADD_FRIEND, REMOVE_FRIEND} from './friendsReducer';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';

// user: id, isActive, lastLogin, accountStatus, firstName, lastName, imgUrl, intro, country, city, gender, isFriend
let initialState = {
  users: [],
  page: 1
};


export function searchPeopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id){
            return {...user, isFriend: true}
          }
          return user
        })
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id){
            return {...user, isFriend: false}
          }
          return user
        })
      };
    case SHOW_MORE_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
        page: action.users.length < 20 ? -1 : state.page + 1
      }
    default:
      return state;
  }
}

export function showMoreUsersActionCreator(users) {
  return {
    type: SHOW_MORE_USERS,
    users: users
  };
}


