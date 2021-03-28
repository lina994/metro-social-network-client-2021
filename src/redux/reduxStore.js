import { createStore, combineReducers } from "redux";

import { avatarReducer } from "./reducers/avatarReducer";
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { friendsReducer } from './reducers/friendsReducer';
import { searchPeopleReducer } from './reducers/searchPeopleReducer';


let reducers = combineReducers({
  avatar: avatarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  searchPeoplePage: searchPeopleReducer
});

let store = createStore(reducers);

export default store;

