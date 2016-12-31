import { createStore } from 'redux';
import rootReducer from './reducer.js';

const preloadedState = {
  leaderboard: [],
  currentUser: {}
};

const store = createStore(rootReducer);

export default store;

/*

leaderboard: {

}


currentUser: {
  userId
  username

}
*/
