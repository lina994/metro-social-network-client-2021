import { createStore, combineReducers } from "redux";

import { avatarReducer } from "./reducers/avatarReducer";
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { friendsReducer } from './reducers/friendsReducer';
import { searcgPeopleReducer } from './reducers/searcgPeopleReducer';


let reducers = combineReducers({
  avatar: avatarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  searchPeoplePage: searcgPeopleReducer
});

let store = createStore(reducers);

export default store;

