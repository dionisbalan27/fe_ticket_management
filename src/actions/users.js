import {
  REGISTER_USER,
  LOGIN_USER,
} from "./types";

import UserDataService from "../services/UserService";

export const registerUser = (data) => async (dispatch) => {
  try {
    const res = await UserDataService.postRegisterUser(data);
    
    dispatch({
      type: REGISTER_USER,
      payload: res.data.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await UserDataService.postLoginUser(data);
    localStorage.setItem('token', res.data.data.token);
    console.log("9")
    dispatch({
      type: LOGIN_USER,
      payload: res.data.data,
    });
    console.log("1")

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
