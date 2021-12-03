import profileImage2 from './../../resources/profile_image2.jpg';
import profileImage3 from './../../resources/profile_image3.jpg';
import profileImage4 from './../../resources/profile_image4.jpg';

export const ADD_FRIEND = 'ADD-FRIEND';
export const REMOVE_FRIEND = 'REMOVE-FRIEND';
const SHOW_MORE_FRIENDS = 'SHOW-MORE-FRIENDS';

let initialState = {
  users: [
    {
      id: 2,
      firstName: "Leo",
      lastName: '',
      imgUrl: profileImage2,
      country: 'USA',
      city: 'New York',
      isFriend: true
    },
    {
      id: 3,
      firstName: "Grey",
      lastName: '',
      imgUrl: profileImage3,
      country: 'USA',
      city: 'New York',
      isFriend: true
    },
    {
      id: 4,
      firstName: "Flora",
      lastName: '',
      imgUrl: profileImage4,
      country: 'USA',
      city: 'Boston',
      isFriend: true
    }
  ]
};


export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      let newFriend = {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        imgUrl: action.imgUrl,
        country: action.country,
        city: action.city,
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
        users: [...state.users, ...action.users]
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