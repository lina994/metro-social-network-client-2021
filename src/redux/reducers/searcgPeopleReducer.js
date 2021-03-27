import profileImage2 from './../../resources/profile_image2.jpg';
import profileImage3 from './../../resources/profile_image3.jpg';
import profileImage4 from './../../resources/profile_image4.jpg';

let initialState = {
  users: [
    {
      userId: 2,
      name: "Mark",
      imgSrc: 'https://images.pexels.com/photos/804172/pexels-photo-804172.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      age: 25,
      location: {
        country: 'USA',
        city: 'New York'
      },
      isFriend: false
    },
    {
      userId: 3,
      name: "Roberto",
      imgSrc: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      age: 35,
      location: {
        country: 'USA',
        city: 'New York'
      },
      isFriend: false
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      age: 18,
      location: {
        country: 'USA',
        city: 'Boston'
      },
      isFriend: false
    },
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


export function searcgPeopleReducer(state = initialState, action) {
  
  switch (action.type) {
    default:
      return state;
  }
  
}

