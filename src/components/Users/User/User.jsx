import React from 'react';
import s from './User.module.css';
import noImage from '../../../resources/no_profile_img.png';

import { addFriendRequest, deleteFriendRequest } from '../../../api/friendsApi';

function handleAddFriendButtonClick(token, user, addFriend) {
  let userInfo = {
    ...user
  };
  addFriendRequest(token, user.id)
    .then((response) => addFriend(userInfo));

}

function handleRemoveFriendButtonClick(token, userId, removeFriend) {
  deleteFriendRequest(token, userId)
    .then((response) => removeFriend(userId));
}

function PlusButton(props) {
  return (
    <button className={s.addButton} onClick={() => handleAddFriendButtonClick(props.token, props.user, props.addFriend)}>
      <div className={s.horizontalLine}></div>
      <div className={s.verticalLine}></div>
      <span className={s.tooltiptext}>Add friend</span>
    </button>
  );
}

function MinusButton(props) {
  return (
    <button className={s.addButton} onClick={() => handleRemoveFriendButtonClick(props.token, props.id, props.removeFriend)}>
      <div className={s.horizontalLine}></div>
      <span className={s.tooltiptext}>Remove friend</span>
    </button>
  );
}


function User(props) {
  let url = (!props.user.imgUrl || props.user.imgUrl === '')
    ? noImage
    : process.env.REACT_APP_STATIC_URL + '/' + props.user.imgUrl.split('/')[1];
  return (
    <div className={s.userWrapper}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src={url} alt="User avatar" />
      </div>

      <div className={s.userInfo}>
        <div className={s.name}>{props.user.firstName + " " + props.user.lastName}</div>
        <div>{`${props.user.city}, ${props.user.country}`}</div>
      </div>

      {props.user.isFriend || props.isFriend
        ? <MinusButton removeFriend={props.removeFriend} id={props.user.id} token={props.token} />
        : <PlusButton addFriend={props.addFriend} user={props.user} token={props.token} />}
    </div>
  );
}

export default User;

