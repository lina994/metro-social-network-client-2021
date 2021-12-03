import React from 'react';
import s from './SignUp.module.css';
import { signUpRequest } from '../../../api/authenticationApi';
import Field from '../Field/Field'


function handleSignUp(emailElement, passwordElement, firstNameElement, lastNameElement, 
  countryElement, cityElement, genderElement, signUp) {
    signUpRequest(
      emailElement.current.value, 
      passwordElement.current.value,
      firstNameElement.current.value,
      lastNameElement.current.value,
      countryElement.current.value,
      cityElement.current.value,
      genderElement.current.value
      ).then((response) => signUp(response.data.token));
}

function SignUp(props) {
  let emailElement = React.createRef();
  let passwordElement = React.createRef();
  let firstNameElement = React.createRef();
  let lastNameElement = React.createRef();
  let countryElement = React.createRef();
  let cityElement = React.createRef();
  let genderElement = React.createRef();

  return (
    <div className={s.signUpWrapper}>
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
      <Field 
        fieldType="text" 
        fieldName="firstName" 
        fieldValue={props.firstName} 
        fieldElement={firstNameElement} 
        updateValue={props.updateFirstName} 
        fieldLabel="First name:" />
      <Field 
        fieldType="text" 
        fieldName="lastName" 
        fieldValue={props.lastName} 
        fieldElement={lastNameElement} 
        updateValue={props.updateLastName} 
        fieldLabel="Last name:" />
      <Field 
        fieldType="text" 
        fieldName="country" 
        fieldValue={props.country} 
        fieldElement={countryElement} 
        updateValue={props.updateCountry} 
        fieldLabel="Country:" />
      <Field 
        fieldType="text" 
        fieldName="city" 
        fieldValue={props.city} 
        fieldElement={cityElement} 
        updateValue={props.updateCity} 
        fieldLabel="City:" />
      <Field 
        fieldType="text" 
        fieldName="gender" 
        fieldValue={props.gender} 
        fieldElement={genderElement} 
        updateValue={props.updateGender} 
        fieldLabel="Gender:" />

      <button 
        className={s.signUpButton} 
        onClick={() => handleSignUp(
          emailElement, passwordElement, firstNameElement, lastNameElement, 
          countryElement, cityElement, genderElement, props.signUp
        )}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;

