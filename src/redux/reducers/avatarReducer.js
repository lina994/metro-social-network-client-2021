import profileImage from './../../resources/profile_image.jpg';

let initialState = {
  imgSrc: profileImage,
  name: "Oscar",
  birthday: "2016-02-29",  // "YYYY-MM-DD"
  location: "Tel-Aviv, Israel"
};

export function avatarReducer(state = initialState, action) {
  // switch(action.type) {
  // }
  return state;
}