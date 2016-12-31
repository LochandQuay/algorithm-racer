export const ADD_ALGORITHM = "ADD_ALGORITHM";
export const REMOVE_ALGORITHM = "REMOVE_ALGORITHM";

export const addAlgorithm = (title, body, category) => ({
  type: ADD_ALGORITHM,
  title: title,
  body: body,
  category: category
});
export const removeAlgorithm = () => ({
  type: REMOVE_ALGORITHM
});
