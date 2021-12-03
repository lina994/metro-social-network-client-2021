import React from 'react';
import s from './User.module.css';


function handleAddFriendButtonClick(user, addFriend) {
  let userInfo = {
    ...user
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
    <button className={s.addButton} onClick={() => handleRemoveFriendButtonClick(props.id, props.removeFriend)}>
      <div className={s.horizontalLine}></div>
      <span className={s.tooltiptext}>Remove friend</span>
    </button>
  );
}


function User(props) {
  let url = (!props.user.imgUrl || props.user.imgUrl === '')
    ? 'https://media.istockphoto.com/vectors/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-vector-id1193046540?k=20&m=1193046540&s=612x612&w=0&h=HQfBJLo1S0CJEsD4uk7m3EkR99gkICDdf0I52uAlk-8='
    : props.user.imgUrl;
  console.log(url);
  return (
    <div className={s.userWrapper}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={url} alt="User avatar" />
      </div>

      <div className={s.userInfo}>
        <div className={s.name}>{props.user.firstName + " " + props.user.lastName}</div>
        <div>{`${props.user.city}, ${props.user.country}`}</div>
      </div>

      {props.user.isFriend
        ? <MinusButton removeFriend={props.removeFriend} id={props.user.id} />
        : <PlusButton addFriend={props.addFriend} user={props.user} />}
    </div>
  );
}

export default User;

