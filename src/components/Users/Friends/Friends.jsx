import React from 'react';
import s from './Friends.module.css';
import User from '../User/User';

function onShoWMoreButtonClick(showMore) {
  showMore([]);
  alert('TODO - implement');
}

function Friends(props) {
  let friends =  props.users.map((user, index) => <User  key={index} user={user} addFriend={props.addFriend} removeFriend={props.removeFriend} />);
  return (
    <div className={s.friendsWrapper}>
      <h2>Friends</h2>
      { friends }
      <button className={s.showMoreButton} onClick={() => onShoWMoreButtonClick(props.showMore)}>Show More</button>
    </div>
  );
}

export default Friends;

