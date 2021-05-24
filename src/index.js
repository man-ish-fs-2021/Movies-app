import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';



import './index.css';
import App from './components/App';
import rootReducer from './reducers';


const logger = ({dispatch,getState}) => (next) => (action) =>{
  console.log("ACtion type",action.type);
  next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger));


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

