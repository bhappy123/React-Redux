import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AllReducer from './Reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Creating a store

const store = createStore(AllReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

