import React from 'react';
import s from './Friends.module.css';
import User from '../User/User';


function Friends(props) {
  let friends =  props.users.map((user, index) => <User  key={index} user={user} addFriend={props.addFriend} removeFriend={props.removeFriend} />);
  return (
    <div className={s.friendsWrapper}>
      <h2>Friends</h2>
      { friends }
    </div>
  );
}

export default Friends;

