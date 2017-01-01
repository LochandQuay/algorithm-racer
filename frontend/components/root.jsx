import React from 'react';
import { Provider } from 'react-redux';
import Leaderboard from './leaderboard';
import Editor from './editor.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <div> {/* change to store provider?? */}
      <Leaderboard />
      <Editor />
    </div>
  </Provider>
);

export default Root;
