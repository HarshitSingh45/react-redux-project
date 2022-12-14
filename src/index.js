import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {reducer} from './reducer'
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk, logger));
console.log('Initial state ', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
