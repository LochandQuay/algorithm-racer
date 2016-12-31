import { ADD_SCORE, REMOVE_SCORE, CLEAR } from './leaderboard_actions';
import merge from 'lodash/merge';


const leaderboardReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_SCORE:
      return merge({}, state, {
        username: action.username,
        score: action.score
      });
    case REMOVE_SCORE:
      return merge({}, state, {

      });
    case CLEAR:
      return {};
    default:
      return state;
  }
};

export default leaderboardReducer;
