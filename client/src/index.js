import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/initState';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, initState(), composeWithDevTools())

store.subscribe(() => {
  window.localStorage.setItem('myApp', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
