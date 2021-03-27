import React from 'react';
import s from './SearchPeople.module.css';
import User from '../User/User';


function SearchPeople(props) {
  let users =  props.searchPeoplePage.users.map((user) => <User user={user} />);
  return (
    <div className={s.searchPeopleWrapper}>
      <h2>Search people</h2>
      { users }
    </div>
  );
}

export default SearchPeople;

