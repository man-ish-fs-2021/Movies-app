import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



import './index.css';
import App from './components/App';
import rootReducer from './reducers';


const logger = ({dispatch,getState}) => (next) => (action) =>{
  if(typeof action !== 'function'){
    console.log("ACtion type",action.type);
  }
  next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger,thunk));


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

