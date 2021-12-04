import React from 'react';
import s from './SearchPeople.module.css';
import User from '../User/User';

import { getPeople } from '../../../api/peopleApi';


let firstVisit = true; // StrictMode * 2


function onShoWMoreButtonClick(token, showMore, page=1, firstName="", lastName="", country="", city="") {
  if(page === -1) return; // no more
  getPeople(token, page, firstName, lastName, country, city)
    .then((response) => showMore(response.data));
}

function SearchPeople(props) {
  if (props.users.length === 0 && firstVisit) { // TODO - remove, side effects
    firstVisit = false;
    onShoWMoreButtonClick(props.token, props.showMore);
  }

  let users =  props.users.map((user, index) => <User key={index} token={props.token} user={user} addFriend={props.addFriend} removeFriend={props.removeFriend} />);

  return (
    <div className={s.searchPeopleWrapper}>
      <h2>Search people</h2>
      { users }
      <button className={s.showMoreButton} onClick={() => onShoWMoreButtonClick(props.token, props.showMore, props.page)}>Show More</button>
    </div>
  );
}

export default SearchPeople;

