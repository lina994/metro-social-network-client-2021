
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
      }
    },
    {
      userId: 3,
      name: "Roberto",
      imgSrc: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      age: 35,
      location: {
        country: 'USA',
        city: 'New York'
      }
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: 'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      age: 18,
      location: {
        country: 'USA',
        city: 'Boston'
      }
    }
  ]
};


export function searcgPeopleReducer(state = initialState, action) {
  
  switch (action.type) {
    default:
      return state;
  }
  
}