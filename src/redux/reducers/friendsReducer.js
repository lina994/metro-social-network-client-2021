import profileImage2 from './../../resources/profile_image2.jpg';
import profileImage3 from './../../resources/profile_image3.jpg';
import profileImage4 from './../../resources/profile_image4.jpg';

export const ADD_FRIEND = 'ADD-FRIEND';
export const REMOVE_FRIEND = 'REMOVE-FRIEND';
const SHOW_MORE_FRIENDS = 'SHOW-MORE-FRIENDS';

let initialState = {
  users: [
    {
      userId: 2,
      name: "Leo",
      imgSrc: profileImage2,
      age: 25,
      location: {
        country: 'USA',
        city: 'New York'
      },
      isFriend: true
    },
    {
      userId: 3,
      name: "Grey",
      imgSrc: profileImage3,
      age: 15,
      location: {
        country: 'USA',
        city: 'New York'
      },
      isFriend: true
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: profileImage4,
      age: 18,
      location: {
        country: 'USA',
        city: 'Boston'
      },
      isFriend: true
    }
  ]
};


export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND:
      let newFriend = {
        userId: action.userId,
        name: action.name,
        imgSrc: action.imgSrc,
        age: action.age,
        location: action.location,
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
          return user.userId !== action.userId;
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
    userId: userInfo.userId,
    name: userInfo.name,
    imgSrc: userInfo.imgSrc,
    age: userInfo.age,
    location: {
      country: userInfo.location.country,
      city: userInfo.location.city
    }
  };
}

export function removeFriendActionCreator(userId) {
  return {
    type: REMOVE_FRIEND,
    userId: userId
  };
}

export function showMoreFriendActionCreator(users) {
  return {
    type: SHOW_MORE_FRIENDS,
    users: users
  };
}