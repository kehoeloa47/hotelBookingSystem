import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './store/reducers';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    reducers, 
    applyMiddleware(thunk),
  ); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

