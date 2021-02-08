import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Avatar />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
