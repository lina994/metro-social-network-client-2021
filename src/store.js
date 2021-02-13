import logoImage from './resources/logo/m7_logo.svg';      // Header
import profileImage from './resources/profile_image.jpg';  // Avatar, ProfileInformation, Post
import coverImage from './resources/cover_image.jpg'       // Cover

// Header
let header = {
  logo: logoImage
};

// Avatar
let avatar = {
  imgSrc: profileImage,
  name: "Oscar",
  birthday: "2016-02-29",  // "YYYY-MM-DD"
  location: "Tel-Aviv, Israel"
};

// Profile
let posts = [
  {
    author: {
      name: "Oscar",
      imgSrc: profileImage
    },
    date: "7/2/21, 13:00",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.`
  },
  {
    author: {
      name: "Oscar",
      imgSrc: profileImage
    },
    date: "12/2/21, 10:00",
    text: `Lorem ipsum voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.`
  }
];

let profilePage = {
  cover: {
    imgSrc: coverImage
  },
  profileInfo: {
    imgSrc: profileImage,
    name: "Oscar",
    birthday: "2016-02-29",  // "YYYY-MM-DD"
    location: "Tel-Aviv, Israel",
    education: "",
    website: ""
  },
  posts: posts
};

// state
let state = {
  header: header,
  avatar: avatar,
  sidebar: {},
  profilePage: profilePage
};

// store
let store = {
  state: state
}

export default store;