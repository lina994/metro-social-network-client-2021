import React from 'react';
import s from './Friend.module.css';



function Friend(props) {
  return (
    <div className={s.friendWrapper}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={props.user.imgSrc} alt="friend avatar" />
      </div>
      <div className={s.userInfo}>
        <div className={s.name}>{props.user.name}</div>
        <div>{`${props.user.age} years`}</div>
        <div>{`${props.user.location.city}, ${props.user.location.country}`}</div>
      </div>
    </div>
  );
}

export default Friend;