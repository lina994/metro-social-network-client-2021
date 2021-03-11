import React from 'react';
import NewPost from './NewPost';
import { updateNewPostActionCreator, addPostActionCreator } from "./../../../../redux/reducers/profileReducer";



function NewPostContainer(props) {

  let updatePost = (text) => {
    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  };

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  return (
    <NewPost newPostText={props.newPostText} updatePost={updatePost} addPost={addPost} />
  );
}

export default NewPostContainer;

