import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import s from './Users.module.css';
import UsersPageMenu from './UsersPageMenu/UsersPageMenu';
import FriendsContainer from './Friends/FriendsContainer';
import SearchPeopleContainer from './SearchPeople/SearchPeopleContainer';




function Users(props) {
  return (
    <div className={s.usersPageWrapper}>
      <UsersPageMenu />
      <Route exact path="/users"><Redirect to="/users/my_friends" /></Route>
      <Route path='/users/my_friends' render={() => <FriendsContainer />} />
      <Route path='/users/search_people' render={() => <SearchPeopleContainer />} />
    </div>
  );
}

export default Users;

