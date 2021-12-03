import React from 'react';
import s from './LogIn.module.css';
import { logInRequest } from '../../../api/authenticationApi';
import Field from '../Field/Field'


function handleLogIn(emailElement, passwordElement, logIn) {
  logInRequest(emailElement.current.value, passwordElement.current.value)
    .then((response) => logIn(response.data.token));
}

function LogIn(props) {
  let emailElement = React.createRef();
  let passwordElement = React.createRef();

  return (
    <div className={s.logInWrapper}>
      <Field 
        fieldType="email" 
        fieldName="email" 
        fieldValue={props.email} 
        fieldElement={emailElement} 
        updateValue={props.updateEmail} 
        fieldLabel="Email:" />
      <Field 
        fieldType="password" 
        fieldName="password" 
        fieldValue={props.password} 
        fieldElement={passwordElement} 
        updateValue={props.updatePassword} 
        fieldLabel="Password:" />

      <button 
        className={s.logInButton} 
        onClick={() => handleLogIn(emailElement, passwordElement, props.logIn)}>
        Log In
      </button>
    </div>
  );
}

export default LogIn;


