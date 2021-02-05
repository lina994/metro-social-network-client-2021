import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
