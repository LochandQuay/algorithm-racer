import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';

$(() => {
  // const store = configureStore();
  // const root = document.getElementById('content');
  const app = document.getElementById('app');
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<App />, app);
});
