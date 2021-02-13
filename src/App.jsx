import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div className={s.appWrapper}>
      <Header header={props.store.state.header} />
      <Avatar avatar={props.store.state.avatar}/>
      <Navbar />
      <Profile profilePage={props.store.state.profilePage} />
      <Footer />
    </div>
  );
}

export default App;
