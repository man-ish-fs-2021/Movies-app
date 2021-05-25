import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
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
// export const StoreContext = createContext();
// console.log("Store context", StoreContext);

// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return (<StoreContext.Provider value={store}>
//              {this.props.children}   
//              {/* all the components between the StoreContext brackets are the children of the provider. Any thing betweeen these tags can be passed down using context */}
//              </StoreContext.Provider>)
//   }
// }


// export function connect(callback){
//   return function(Component) {
//      class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//          this.unsubscribe=this.props.store.subscribe(()=>{
//           console.log("updated");
//           this.forceUpdate();
//         });
//         // this returns a function. We can use this function to unsuscribe in componentwillunmount. Just like action listeners, we have to disable then after ther are called.
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//         // this will unmount the subscribe.
//       }
//       render(){
//           const {store} = this.props;
//           const state = store.getState(); 
//           const dataToBePassedAsProps = callback(state);
//              return   <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
        
//       }
//     }
//      class ConnectedComponentWrapper extends React.Component{
//        render(){
//          return(<StoreContext.Consumer>
//                  {(store)=> <ConnectedComponent store={store} />}
//                 </StoreContext.Consumer>);
//        }
//      }
//      return ConnectedComponentWrapper;
//   };
//   // at this point we are sending store as props to our app component or any other component which uses this function "connect".
// }




ReactDOM.render(
  
   <Provider store={store}> 
   <App/> 
   </Provider>,
  document.getElementById('root')
);

