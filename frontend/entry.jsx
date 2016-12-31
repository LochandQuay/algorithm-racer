import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

$(() => {
  
  const app = document.getElementById('app');
  ReactDOM.render(<Root />, app);
});
