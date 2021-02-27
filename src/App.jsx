import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './App.module.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header header={props.store.state.header} />
        <Avatar avatar={props.store.state.avatar} />
        <Navbar />
        <div className={s.appWrapperContent}>
          <Route path='/profile' render={()=><Profile profilePage={props.store.state.profilePage} addPost={props.addPost} />} />
          <Route path='/dialogs' render={()=><Dialogs dialogsPage={props.store.state.dialogsPage} addMessage={props.addMessage} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
