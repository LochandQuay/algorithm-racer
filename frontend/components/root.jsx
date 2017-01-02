import React from 'react';
import { Provider } from 'react-redux';
import Editor from './editor.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Editor />
    </div>
  </Provider>
);

export default Root;
