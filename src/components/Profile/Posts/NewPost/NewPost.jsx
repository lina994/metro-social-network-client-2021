import React from 'react';
import s from './NewPost.module.css';

function handleSubmit(element, addPost) {
  // TODO - implement this function
  let value = element.current.value;
  addPost(value);
  element.current.value = '';
}


function NewPost(props) {
  let newPostElement = React.createRef();

  return (
    <div className={s.newPostWrapper}>
      <div>
        <textarea
          className={s.postInput}
          ref={newPostElement}
          placeholder="Say something...">
        </textarea>
      </div>
      <button className={s.submitButton} onClick={() => handleSubmit(newPostElement, props.addPost)}>Add post</button>
    </div>
  );
}

export default NewPost;



// function handleSubmit(event) {
//   alert('Hello world');
//   event.preventDefault();
// }

// function NewPost(props) {
//   return (
//     <div className={s.newPostWrapper}>
//       <form onSubmit={handleSubmit}>
//         <textarea className={s.postInput} placeholder="Say something..."></textarea>
//         <input className={s.postSubmit} type="submit" value="Add post" />
//       </form>
//     </div>
//   );
// }

