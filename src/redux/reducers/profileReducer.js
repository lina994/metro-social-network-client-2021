import coverImage from './../../resources/cover_image.jpg';
import profileImage from './../../resources/profile_image.jpg';

const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const ADD_POST = 'ADD-POST';

let posts = {
  newPostText: "",
  oldPosts: [
    {
      postId: 1,
      author: {
        userId: 1,
        name: "Oscar",
        imgSrc: profileImage
      },
      date: "7/2/21, 13:00",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.`,
      likes: 5,
      comments: [
        {
          commentId: 1,
          author: {
            userId: 1,
            name: "Oscar",
            imgSrc: profileImage
          },
          date: "8/2/21, 10:00",
          text: `Lorem ipsum dolor sit`
        }
      ]
    },
    {
      postId: 2,
      author: {
        userId: 1,
        name: "Oscar",
        imgSrc: profileImage
      },
      date: "12/2/21, 10:00",
      text: `Lorem ipsum voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.`,
      likes: 15,
      comments: [
        {
          commentId: 1,
          author: {
            userId: 1,
            name: "Oscar",
            imgSrc: profileImage
          },
          date: "7/2/21, 13:00",
          text: `Lorem ipsum dolor sit`
        }
      ]
    }
  ]
};

let initialState = {
  cover: {
    imgSrc: coverImage
  },
  profileInfo: {
    userId: 1,
    imgSrc: profileImage,
    name: "Oscar",
    birthday: "2016-02-29",  // "YYYY-MM-DD"
    location: "Tel-Aviv, Israel",
    education: "",
    website: ""
  },
  posts: posts
};



function createNewPost(text, img) { // TODO - postId, author, date
  return {
    postId: 1,
    author: {
      userId: 1,
      name: "Oscar",
      imgSrc: img
    },
    date: "7/2/21, 13:00",
    text: text,
    likes: 0,
    comments: []
  };

}

export function profileReducer(state = initialState, action) {
  switch(action.type) {
    case NEW_POST_CHANGE:
      return {
        ...state,
        posts: {
          ...state.posts,
          newPostText: action.text
        }
      };
    case ADD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          newPostText: "",
          oldPosts: [...state.posts.oldPosts, createNewPost(state.posts.newPostText, action.img)]
        }
      };
    default:
       return state;
  }
}

export function updateNewPostActionCreator(value) {
  return {
    type: NEW_POST_CHANGE,
    text: value
  };
}

export function addPostActionCreator() {
  return {
    type: ADD_POST,
    img: profileImage  // TODO - get currect image
  };
}

