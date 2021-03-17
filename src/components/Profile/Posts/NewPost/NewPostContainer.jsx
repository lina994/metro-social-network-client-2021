import { connect } from 'react-redux';
import { updateNewPostActionCreator, addPostActionCreator } from "./../../../../redux/reducers/profileReducer";
import NewPost from './NewPost';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.posts.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;

