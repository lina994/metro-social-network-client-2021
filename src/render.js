import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { addPost, addMessage } from "./store";


export let rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} addPost={addPost} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};