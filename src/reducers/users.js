import {
  REGISTER_USER,
  LOGIN_USER,
} from "../actions/types";

const initialState = {listpage : false};

const userReducer = (users = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case REGISTER_USER:
    return payload;
    
    case LOGIN_USER:
    console.log(payload)
      // localStorage.setItem('token', response.data.data.token);
      return {
        ...users,
        listpage : true,
        payload
      }

      default:
      return users;
    }
  };

  export default userReducer;