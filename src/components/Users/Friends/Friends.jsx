import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';



function Friends(props) {
  let friends =  props.friendsPage.users.map((user) => <Friend user={user} />);
  return (
    <div className={s.friendsWrapper}>
      <h2>Friends</h2>
      { friends }
    </div>
  );
}

export default Friends;