import React from 'react';
import s from './Post.module.css';

function Post(props) {
  const author = props.post.author;

  return (
    <div className={s.postWrapper}>
      <div className={s.top}>
        <div className={s.profileImageWrapper}>
          <img className={s.profileImage} src={author.imgSrc} alt="author avatar" />
        </div>
        <div className={s.topContent}>
          <div className={s.name}>{author.name}</div>
          <div className={s.data}>{props.post.date}</div>
        </div>
      </div>
      <div className={s.content}>
        <p className={s.text}>
          {props.post.text}
        </p>
      </div>
      <hr className={s.hrLine}/>
      <div className={s.postFooter}>
      < div className={s.likesButton}>{"Like (" + props.post.likes + ")"}</div>
        {/* TODO */}
        {/* <div className={s.comments}>{"comment (" + props.post.comments.length + ")"}</div> */}
      </div>
    </div>
  );
}

export default Post;

