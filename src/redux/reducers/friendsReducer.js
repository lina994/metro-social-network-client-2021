export const ADD_FRIEND = 'ADD-FRIEND';
export const REMOVE_FRIEND = 'REMOVE-FRIEND';
const SHOW_MORE_FRIENDS = 'SHOW-MORE-FRIENDS';

let initialState = {
  users: [],
  page: 1
};

// user: id, isActive, lastLogin, accountStatus, firstName, lastName, imgUrl, intro, country, city, gender, isFriend

export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      let newFriend = {
        id: action.id,
        isActive: action.isActive,
        lastLogin: action.lastLogin,
        accountStatus: action.accountStatus,
        firstName: action.firstName,
        lastName: action.lastName,
        imgUrl: action.imgUrl,
        intro: action.intro,
        country: action.country,
        city: action.city,
        gender: action.gender, 
        isFriend: true
      }
      return {
        ...state,
        users: [...state.users, newFriend]
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.id;
        })
      };
    case SHOW_MORE_FRIENDS:
      return {
        ...state,
        users: [...state.users, ...action.users],
        page: action.users.length < 20 ? -1 : state.page + 1
      }
    default:
      return state;
  }

}


export function addNewFriendActionCreator(userInfo) {
  return {
    type: ADD_FRIEND,
    id: userInfo.id,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    imgUrl: userInfo.imgUrl,
    country: userInfo.country,
    city: userInfo.city
  };
}

export function removeFriendActionCreator(userId) {
  return {
    type: REMOVE_FRIEND,
    id: userId
  };
}

export function showMoreFriendActionCreator(users) {
  return {
    type: SHOW_MORE_FRIENDS,
    users: users
  };
}