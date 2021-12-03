import React from 'react';
import s from './SearchPeople.module.css';
import User from '../User/User';

import * as axios from 'axios';  // TODO - 13-4-21 move to separate file

let firstVisit = true; // StrictMode * 2

function onShoWMoreButtonClick(showMore) {
  showMore([]);
  alert('TODO - implement');
}

function SearchPeople(props) {
  if (props.users.length === 0 && firstVisit) { // TODO - remove, side effects
    firstVisit = false;


    // TODO - MOVE
    const instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
    });

    instance.get('/people', {
      count: 25,
      page: 2
    })
    .then((res) => props.showMore(res.data));

  }

  let users =  props.users.map((user, index) => <User key={index} user={user} addFriend={props.addFriend} removeFriend={props.removeFriend} />);
  return (
    <div className={s.searchPeopleWrapper}>
      <h2>Search people</h2>
      { users }
      <button className={s.showMoreButton} onClick={() => onShoWMoreButtonClick(props.showMore)}>Show More</button>
    </div>
  );
}

export default SearchPeople;

