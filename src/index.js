import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';



import './index.css';
import App from './components/App';
import Movies from './reducers';

const store = createStore(Movies);


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

