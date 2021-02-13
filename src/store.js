import logoImage from './resources/logo/m7_logo.svg';      // Header
import profileImage from './resources/profile_image.jpg';  // Avatar, ProfileInformation, Post
import coverImage from './resources/cover_image.jpg'       // Cover

let logoAlt = "Metro7 logo";
let profileImageAlt = "profile avatar";
let coverAlt = "cover";

let header = {
  logo: {
    imgSrc: logoImage,
    imgAlt: logoAlt
  }
};

let profileBasicInfo = {
  profileImage: {
    imgSrc: profileImage,
    imgAlt: profileImageAlt
  },
  name: "Oscar",
  birthday: "2016-02-29",  // "YYYY-MM-DD"
  location: "Tel-Aviv, Israel"
};

let profileAdditionalInfo = {
  education: "",
  website: ""
};

let avatar = {
  profileInfo: profileBasicInfo
};

let posts = [
  {
    author: {
      name: "Oscar",
      authorImg: {
        imgSrc: profileImage,
        imgAlt: profileImageAlt
      }
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
      authorImg: {
        imgSrc: profileImage,
        imgAlt: profileImageAlt
      }
    },
    date: "12/2/21, 10:00",
    text: `Lorem ipsum voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.`
  }
];

let profilePage = {
  cover: {
    imgSrc: coverImage,
    imgAlt: coverAlt
  },
  profileInfo: {
    profileBasicInfo: profileBasicInfo,
    profileAdditionalInfo: profileAdditionalInfo
  },
  posts: posts
};


let state = {
  header: header,
  avatar: avatar,
  sidebar: {},
  profilePage: profilePage
};

let store = {
  state: state
}

export default store;