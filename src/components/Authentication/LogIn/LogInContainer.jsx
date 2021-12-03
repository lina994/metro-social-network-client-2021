import { connect } from 'react-redux';
import LogIn from './LogIn';
import { updateLogInEmailActionCreator, updateLogInPasswordActionCreator, logInActionCreator } from "./../../../redux/reducers/authenticationReducer";


let mapStateToProps = (state) => {
  return {
    token: state.authenticationPage.token, 
    email: state.authenticationPage.logInEmail,
    password: state.authenticationPage.logInPassword
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: (text) => {
      dispatch(updateLogInEmailActionCreator(text));
    },
    updatePassword: (text) => {
      dispatch(updateLogInPasswordActionCreator(text));
    },
    logIn: (token) => {
      dispatch(logInActionCreator(token));
    }
  };
};

const LogInContainer = connect(mapStateToProps, mapDispatchToProps)(LogIn);


export default LogInContainer;

