import { LOGIN_USER, LOGOUT_USER } from '../actions/current_user_actions';

import merge from 'lodash/merge';

const currentUserReducer = (state = {}, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        username: action.username
      };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default currentUserReducer;
