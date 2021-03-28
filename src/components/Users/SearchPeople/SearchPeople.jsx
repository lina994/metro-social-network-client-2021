import React from 'react';
import s from './SearchPeople.module.css';
import User from '../User/User';


function SearchPeople(props) {
  let users =  props.users.map((user, index) => <User key={index} user={user} addFriend={props.addFriend} removeFriend={props.removeFriend} />);
  return (
    <div className={s.searchPeopleWrapper}>
      <h2>Search people</h2>
      { users }
    </div>
  );
}

export default SearchPeople;

