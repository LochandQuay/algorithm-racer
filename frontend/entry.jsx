import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/editor';

$(() => {
  const editor = document.getElementById('editor');
  ReactDOM.render(<Editor />, editor);
});
