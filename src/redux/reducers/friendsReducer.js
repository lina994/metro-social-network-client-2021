import profileImage2 from './../../resources/profile_image2.jpg';
import profileImage3 from './../../resources/profile_image3.jpg';
import profileImage4 from './../../resources/profile_image4.jpg';

const ADD_FRIEND = 'ADD-FRIEND';
const REMOVE_FRIEND = 'REMOVE-FRIEND';

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
