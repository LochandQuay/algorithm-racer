import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';

$(() => {
  const store = configureStore();
  const app = document.getElementById('app');
  ReactDOM.render(<Root />, app);
});
