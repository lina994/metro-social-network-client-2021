import { connect } from 'react-redux';
import App from './App';


let mapStateToProps = (state) => {
  return {
    token: state.authenticationPage.token
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;