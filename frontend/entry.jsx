import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';

$(() => {
  const app = document.getElementById('app');
  ReactDOM.render(<Editor />, app);
});
