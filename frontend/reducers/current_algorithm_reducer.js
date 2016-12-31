import { ADD_ALGORITHM, REMOVE_ALGORITHM } from '../actions/current_algorithm_actions';

const currentAlgorithmReducer = (state = {}, action) => {
  switch(action.type) {
    case ADD_ALGORITHM:
      return {
        title: action.title,
        body: action.body,
        category: action.category
      };
    case REMOVE_ALGORITHM:
      return {};
    default:
      return state;
  }
};

export default currentAlgorithmReducer;
