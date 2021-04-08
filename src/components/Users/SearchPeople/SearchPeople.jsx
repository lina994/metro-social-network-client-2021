import React from 'react';
import s from './SearchPeople.module.css';
import User from '../User/User';

let firstVisit = true; // StrictMode * 2

function onShoWMoreButtonClick(showMore) {
  showMore([]);
  alert('TODO - implement');
}

function SearchPeople(props) {
  if (props.users.length === 0 && firstVisit) { // TODO - remove, side effects
    firstVisit = false;
    props.showMore(
      [
        {
          userId: 5,
          name: "Mark",
          imgSrc: 'https://images.pexels.com/photos/804172/pexels-photo-804172.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
          age: 25,
          location: {
            country: 'USA',
            city: 'New York'
          },
          isFriend: false
        },
        {
          userId: 6,
          name: "Roberto",
          imgSrc: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
          age: 35,
          location: {
            country: 'USA',
            city: 'New York'
          },
          isFriend: false
        }
      ]);
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

