import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore , combineReducers , applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import reducerTwo from './redux/reducerTwo';

export const initialState = {
  products : [],
  cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  searchValue : '',
  categoryValue : 'Choose',
  loggedIn : localStorage.getItem('loggedIn')? JSON.parse(localStorage.getItem('loggedIn')) : false ,
  wishList : localStorage.getItem('wishList')? JSON.parse(localStorage.getItem('wishList')) : [],
  userData : localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')) : []
}

function saveState(state)
{
  localStorage.setItem('wishList',JSON.stringify(state.wishList));
  localStorage.setItem('cart',JSON.stringify(state.cart));
  localStorage.setItem('loggedIn',JSON.stringify(state.loggedIn));
  localStorage.setItem('userData',JSON.stringify(state.userData));
}
const root = combineReducers({ dataOne : reducer , dataTwo : reducerTwo });


const store = createStore(root , applyMiddleware(thunk));

store.subscribe(()=>
{
  saveState(store.getState().dataOne);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
