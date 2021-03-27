import React from 'react';
import s from './Friends.module.css';
import User from '../User/User';


function Friends(props) {
  let friends =  props.friendsPage.users.map((user) => <User user={user} />);
  return (
    <div className={s.friendsWrapper}>
      <h2>Friends</h2>
      { friends }
    </div>
  );
}

export default Friends;

