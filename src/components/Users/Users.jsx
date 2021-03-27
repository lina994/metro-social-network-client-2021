import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import s from './Users.module.css';
import UsersPageMenu from './UsersPageMenu/UsersPageMenu';
import Friends from './Friends/Friends';
import SearchPeople from './SearchPeople/SearchPeople';




function Users(props) {
  return (
    <div className={s.usersPageWrapper}>
      <UsersPageMenu />
      <Route exact path="/users"><Redirect to="/users/my_friends" /></Route>
      <Route path='/users/my_friends' render={() => <Friends friendsPage={props.friendsPage} />} />
      <Route path='/users/search_people' render={() => <SearchPeople searchPeoplePage={props.searchPeoplePage} />} />
    </div>
  );
}

export default Users;

