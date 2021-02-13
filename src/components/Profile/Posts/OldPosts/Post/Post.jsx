import React from 'react';
import s from './Post.module.css';

function Post(props) {
  const author = props.post.author;
  return (
    <div className={s.postWrapper}>
      <div className={s.leftSide}>
        <div className={s.profileImageWrapper}>
          <img className={s.profileImage} src={author.authorImg.imgSrc} alt={author.authorImg.imgAlt} />
        </div>
      </div>
      <div className={s.rightSide}>
        <div className={s.name}>{author.name}</div>
        <div className={s.data}>{props.post.date}</div>
        <p className={s.text}>
          {props.post.text}
        </p>
      </div>
    </div>
  );
}

export default Post;