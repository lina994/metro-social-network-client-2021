import React from 'react';
import s from './Friends.module.css';
import User from '../User/User';

import { getFriends } from '../../../api/friendsApi';


let firstVisit = true;


function onShoWMoreButtonClick(id, token, showMore, page=1) {
  if(page === -1) return; // no more
  getFriends(id, token, page)
    .then((response) => showMore(response.data));
}

function Friends(props) {
  if (props.users.length === 0 && firstVisit) { // TODO - remove, side effects
    firstVisit = false;
    onShoWMoreButtonClick(props.id, props.token, props.showMore);
  }

  let friends =  props.users.map((user, index) => <User key={index} token={props.token} user={user} isFriend={true} addFriend={props.addFriend} removeFriend={props.removeFriend} />);

  return (
    <div className={s.friendsWrapper}>
      <h2>Friends</h2>
      { friends }
      <button className={s.showMoreButton} onClick={() => onShoWMoreButtonClick(props.id, props.token, props.showMore, props.page)}>Show More</button>
    </div>
  );
}

export default Friends;

