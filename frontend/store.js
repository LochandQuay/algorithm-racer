import { createStore } from 'redux';
import rootReducer from './reducer.js';

const preloadedState = {
  leaderboard: [],
  currentAlgorithm: {},
  currentUser: {}
};

const configureStore = (state = preloadedState) => (
  createStore(rootReducer, state)
);


export default configureStore;
