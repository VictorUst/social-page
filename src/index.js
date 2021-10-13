import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './redux/store'; //учебный стор, для понимания концепции redux
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// const rerenderEntireTree = (state) => {

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
//         store={store}
//         state={state}
//         dispatch={store.dispatch.bind(store)}
      />
    </Provider>
  </BrowserRouter>,document.getElementById('root')
);



// rerenderEntireTree(store.getState());

//каждый раз когда мы узнаем, что state изменился, нам надо у стора заново запросить этот state
//мы в качестве подписчика, отдаем store вместо функции rerenderEntireTree, анонимную функцию
//в которой вызывается rerenderEntireTree, но нам также нужно взять state у store

/*
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});
*/

