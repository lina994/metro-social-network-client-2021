import React from 'react';
import { Route } from 'react-router-dom';
import s from './Users.module.css';
import UsersPageMenu from './UsersPageMenu/UsersPageMenu';
import Friends from './Friends/Friends';
import SearchPeople from './SearchPeople/SearchPeople';




function Users(props) {
  return (
    <div className={s.usersPageWrapper}>
      <UsersPageMenu />
      <Route path='/friends/my_friends' render={() => <Friends friendsPage={props.friendsPage} />} />
      <Route path='/friends/search_people' render={() => <SearchPeople />} />
    </div>
  );
}

export default Users;