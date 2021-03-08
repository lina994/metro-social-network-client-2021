import profileImage from './../resources/profile_image.jpg';  // TODO remove

const NEW_POST_CHANGE = 'NEW-POST-CHANGE';
const ADD_POST = 'ADD-POST';


function newPostChange(state, text) {
  state.posts.newPostText = text;
  return state;
}

function addPost(state, img) { // TODO - postId, author, date
  let text = state.posts.newPostText;
  state.posts.oldPosts.push(
    {
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
    }
  );
  state.posts.newPostText = "";
  return state;
}

export function profileReducer(state, action) {
  switch(action.type) {
    case NEW_POST_CHANGE:
      state = newPostChange(state, action.text);
      break;
    case ADD_POST:
      state = addPost(state, action.img);
      break;
  }
  return state;
}

export function newPostChangeActionCreator(value) {
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

