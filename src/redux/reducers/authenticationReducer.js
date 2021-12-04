export const LOG_IN_EMAIL_CHANGE = 'LOG-IN-EMAIL-CHANGE';
export const LOG_IN_PASSWORD_CHANGE = 'LOG-IN-PASSWORD-CHANGE';
export const LOG_IN = 'LOG-IN';

export const SIGN_UP_EMAIL_CHANGE = 'SIGN-UP-EMAIL-CHANGE';
export const SIGN_UP_PASSWORD_CHANGE = 'SIGN-UP-PASSWORD-CHANGE';
export const SIGN_UP_FIRST_NAME_CHANGE = 'SIGN-UP-FIRST-NAME-CHANGE';
export const SIGN_UP_LAST_NAME_CHANGE = 'SIGN-UP-LAST-NAME-CHANGE';
export const SIGN_UP_COUNTRY_CHANGE = 'SIGN-UP-COUNTRY-CHANGE';
export const SIGN_UP_CITY_CHANGE = 'SIGN-UP-CITY-CHANGE';
export const SIGN_UP_GENDER_CHANGE = 'SIGN-UP-GENDER-CHANGE';
export const SIGN_UP = 'SIGN-UP';


function parseJwt(token) {
  if (!token) { return; }
  const base64Payload = token.split('.')[1];
  const decodedString = atob(base64Payload); // takes a string and decodes it from Base64.
  return JSON.parse(decodedString).id;
}

let initialState = {
  token: null,
  id: null,
  logInEmail: '',
  logInPassword: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpFirstName: '',
  signUpLastName: '',
  signUpCountry: '',
  signUpCity: '',
  signUpGender: ''
};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_EMAIL_CHANGE:
      return {
        ...state,
        logInEmail: action.text
      };
    case LOG_IN_PASSWORD_CHANGE:
      return {
        ...state,
        logInPassword: action.text
      };
    case LOG_IN:
      return {
        ...state,
        token: action.token,
        id: parseJwt(action.token),
        logInEmail: '',
        logInPassword: ''
      };
    case SIGN_UP_EMAIL_CHANGE:
      return {
        ...state,
        signUpEmail: action.text
      };
    case SIGN_UP_PASSWORD_CHANGE:
      return {
        ...state,
        signUpPassword: action.text
      };
    case SIGN_UP_FIRST_NAME_CHANGE:
      return {
        ...state,
        signUpFirstName: action.text
      };
    case SIGN_UP_LAST_NAME_CHANGE:
      return {
        ...state,
        signUpLastName: action.text
      };
    case SIGN_UP_COUNTRY_CHANGE:
      return {
        ...state,
        signUpCountry: action.text
      };
    case SIGN_UP_CITY_CHANGE:
      return {
        ...state,
        signUpCity: action.text
      };
    case SIGN_UP_GENDER_CHANGE:
      return {
        ...state,
        signUpGender: action.text
      };
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        id: parseJwt(action.token),
        signUpEmail: '',
        signUpPassword: '',
        signUpFirstName: '',
        signUpLastName: '',
        signUpCountry: '',
        signUpCity: '',
        signUpGender: ''
      }
    default:
      return state;
  }
}

export function updateLogInEmailActionCreator(text) {
  return {
    type: LOG_IN_EMAIL_CHANGE,
    text: text
  };
}

export function updateLogInPasswordActionCreator(text) {
  return {
    type: LOG_IN_PASSWORD_CHANGE,
    text: text
  };
}

export function logInActionCreator(token) {
  return {
    type: LOG_IN,
    token: token
  };
}


export function updateSignUpEmailActionCreator(text) {
  return {
    type: SIGN_UP_EMAIL_CHANGE,
    text: text
  };
}

export function updateSignUpPasswordActionCreator(text) {
  return {
    type: SIGN_UP_PASSWORD_CHANGE,
    text: text
  };
}

export function updateSignUpFirstNameActionCreator(text) {
  return {
    type: SIGN_UP_FIRST_NAME_CHANGE,
    text: text
  };
}

export function updateSignUpLastNameActionCreator(text) {
  return {
    type: SIGN_UP_LAST_NAME_CHANGE,
    text: text
  };
}

export function updateSignUpCountryActionCreator(text) {
  return {
    type: SIGN_UP_COUNTRY_CHANGE,
    text: text
  };
}

export function updateSignUpCityActionCreator(text) {
  return {
    type: SIGN_UP_CITY_CHANGE,
    text: text
  };
}

export function updateSignUpGenderActionCreator(text) {
  return {
    type: SIGN_UP_GENDER_CHANGE,
    text: text
  };
}

export function signUpActionCreator(token) {
  return {
    type: SIGN_UP,
    token: token
  };
}
