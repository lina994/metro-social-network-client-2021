import React from 'react';
import s from './User.module.css';


function handleAddFriendButtonClick(user, addFriend) {
  let userInfo = {
    ...user, 
    location: {...user.location}  
  };
  addFriend(userInfo);
}

function handleRemoveFriendButtonClick(userId, removeFriend) {
  removeFriend(userId);
}

function PlusButton(props) {
  return (
    <button className={s.addButton} onClick={() => handleAddFriendButtonClick(props.user, props.addFriend)}>
      <div className={s.horizontalLine}></div>
      <div className={s.verticalLine}></div>
      <span className={s.tooltiptext}>Add friend</span>
    </button>
  );
}

function MinusButton(props) {
  return (
    <button className={s.addButton} onClick={() => handleRemoveFriendButtonClick(props.userId, props.removeFriend)}>
      <div className={s.horizontalLine}></div>
      <span className={s.tooltiptext}>Remove friend</span>
    </button>
  );
}


function User(props) {
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

      {props.user.isFriend
        ? <MinusButton removeFriend={props.removeFriend} userId={props.user.userId} />
        : <PlusButton addFriend={props.addFriend} user={props.user} />}
    </div>
  );
}

export default User;

