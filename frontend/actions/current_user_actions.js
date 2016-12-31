export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = username => ({
  type: LOGIN_USER,
  username: username
});

export const logoutUser = () => ({
  type: LOGIN_USER
});
