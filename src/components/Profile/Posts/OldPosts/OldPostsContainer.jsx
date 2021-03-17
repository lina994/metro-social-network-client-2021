import { connect } from 'react-redux';
import OldPosts from './OldPosts';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts.oldPosts
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

const OldPostsContainer = connect(mapStateToProps, mapDispatchToProps)(OldPosts);

export default OldPostsContainer;