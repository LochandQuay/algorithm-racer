export const ADD_SCORE = "ADD_SCORE";
export const REMOVE_SCORE = "ADD_SCORE";
export const CLEAR = "CLEAR";

export const addScore = (username, score) => ({
  type: ADD_SCORE,
  username: username,
  score: score
});

export const removeScore = (username, score) => ({
  type: REMOVE_SCORE,
  username: username,
  score: score
});

export const clearBoard = () => ({
  type: CLEAR,
});
