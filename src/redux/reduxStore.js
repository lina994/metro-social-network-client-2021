import { createStore, combineReducers } from "redux";

import { authenticationReducer } from './reducers/authenticationReducer';
import { avatarReducer } from "./reducers/avatarReducer";
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { friendsReducer } from './reducers/friendsReducer';
import { searchPeopleReducer } from './reducers/searchPeopleReducer';


let reducers = combineReducers({
  authenticationPage: authenticationReducer,
  avatar: avatarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  searchPeoplePage: searchPeopleReducer
});

let store = createStore(reducers);

export default store;

