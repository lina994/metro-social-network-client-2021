import { createStore, combineReducers } from "redux";

import { avatarReducer } from "./reducers/avatarReducer";
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';

let reducers = combineReducers({
  avatar: avatarReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;

