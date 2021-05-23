import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';



import './index.css';
import App from './components/App';
import Movies from './reducers';

const store = createStore(Movies);
console.log("Store", store);
console.log("STATE", store.getState());

store.dispatch({
  type:'ADD_MOVIES',
  movies:[{name:'Superman'}]
});
console.log("STate later", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

