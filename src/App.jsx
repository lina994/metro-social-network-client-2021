import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';

function App(props) {
  let state = props.store.getState();
  return (
    <div className={s.appWrapper}>
      <Header />
      <Avatar avatar={state.avatar} />
      <Navbar />
      <div className={s.appWrapperContent}>
        <Route path='/profile' render={() => <Profile profilePage={state.profilePage} />} />
        <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} />} />
        <Route path='/users' render={() => <Users friendsPage={state.friendsPage} searchPeoplePage={state.searchPeoplePage} />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

