import React from 'react';
import s from './User.module.css';


function handleFriendsButtonClick() {
  alert("button click");
}


function User(props) {
  let tooltipText = props.user.isFriend ? "Remove friend" : "Add friend";

  return (
    <div className={s.userWrapper}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={props.user.imgSrc} alt="User avatar" />
      </div>

      <div className={s.userInfo}>
        <div className={s.name}>{props.user.name}</div>
        <div>{`${props.user.age} years`}</div>
        <div>{`${props.user.location.city}, ${props.user.location.country}`}</div>
      </div>

      <buttom className={s.addButton} onClick={() => handleFriendsButtonClick()}>
        <div className={s.horizontalLine}></div>
        <div className={props.user.isFriend ? "" : s.verticalLine}></div>
        <span className={s.tooltiptext}>{tooltipText}</span>
      </buttom>
    </div>
  );
}

export default User;

