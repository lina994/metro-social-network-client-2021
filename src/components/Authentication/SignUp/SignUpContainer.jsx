import { connect } from 'react-redux';
import SignUp from './SignUp';
import { 
  updateSignUpEmailActionCreator, 
  updateSignUpPasswordActionCreator, 
  updateSignUpFirstNameActionCreator,
  updateSignUpLastNameActionCreator,
  updateSignUpCountryActionCreator,
  updateSignUpCityActionCreator,
  updateSignUpGenderActionCreator,
  signUpActionCreator 
} from "./../../../redux/reducers/authenticationReducer";

let mapStateToProps = (state) => {
  return {
    token: state.authenticationPage.token,
    email: state.authenticationPage.signUpEmail,
    password: state.authenticationPage.signUpPassword,
    firstName: state.authenticationPage.signUpFirstName,
    lastName: state.authenticationPage.signUpLastName,
    country: state.authenticationPage.signUpCountry,
    city: state.authenticationPage.signUpCity,
    gender: state.authenticationPage.signUpGender
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: (text) => {
      dispatch(updateSignUpEmailActionCreator(text));
    },
    updatePassword: (text) => {
      dispatch(updateSignUpPasswordActionCreator(text));
    },
    updateFirstName: (text) => {
      dispatch(updateSignUpFirstNameActionCreator(text));
    },
    updateLastName: (text) => {
      dispatch(updateSignUpLastNameActionCreator(text));
    },
    updateCountry: (text) => {
      dispatch(updateSignUpCountryActionCreator(text));
    },
    updateCity: (text) => {
      dispatch(updateSignUpCityActionCreator(text));
    },
    updateGender: (text) => {
      dispatch(updateSignUpGenderActionCreator(text));
    },
    signUp: (token) => {
      dispatch(signUpActionCreator(token));
    }
  };
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);


export default SignUpContainer;

