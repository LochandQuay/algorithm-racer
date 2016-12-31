import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboard_reducer';
import currentUserReducer from './current_user_reducer';
import currentAlgorithmReducer from './current_algorithm_reducer';

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
  currentUser: currentUserReducer,
  currentAlgorithm: currentAlgorithmReducer
});

export default rootReducer;
