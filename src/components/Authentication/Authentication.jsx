import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import s from './Authentication.module.css';
import AuthPageMenu from './AuthPageMenu/AuthPageMenu';
import LogInContainer from './LogIn/LogInContainer';
import SignUpContainer from './SignUp/SignUpContainer';

function Authentication(props) {
  return (
    <div className={s.authenticationPage}>
      <div className={s.box}>
        <AuthPageMenu />
        <Route exact path="/"><Redirect to="/log_in" /></Route>
        <Route path='/log_in' render={() => <LogInContainer />} />
        <Route path='/sign_up' render={() => <SignUpContainer />} />
      </div>
    </div>
  );
}

export default Authentication;