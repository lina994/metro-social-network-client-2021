import profileImage2 from './../../resources/profile_image2.jpg';
import profileImage3 from './../../resources/profile_image3.jpg';
import profileImage4 from './../../resources/profile_image4.jpg';

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
    default:
      return state;
  }
  
}

