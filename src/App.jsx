import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import s from './App.module.css';
import Authentication from './components/Authentication/Authentication';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';

import store from "./redux/reduxStore";

function App(props) {
  let state = store.getState();

  if (!props.token) {
    return (
      <Authentication />
    );
  }

  return (
    <div className={s.appWrapper}>
      <Header />
      <Avatar avatar={state.avatar} />
      <Navbar />
      <div className={s.appWrapperContent}>
        <Route exact path="/log_in"><Redirect to="/" /></Route>
        <Route exact path="/sign_up"><Redirect to="/" /></Route>
        <Route path='/profile' render={() => <Profile profilePage={state.profilePage} />} />
        <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} />} />
        <Route path='/users' render={() => <Users friendsPage={state.friendsPage} searchPeoplePage={state.searchPeoplePage} />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

