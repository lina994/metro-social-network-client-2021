import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div className={s.appWrapper}>
      <Header header={props.store.state.header} />
      <Avatar avatar={props.store.state.avatar} />
      <Navbar />
      <div className={s.appWrapperContent}>
        <Dialogs dialogsPage={props.store.state.dialogsPage} />
        {/* <Profile profilePage={props.store.state.profilePage} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
