import http from "../http-common";

const postRegisterUser = data => {
  return http.post("/user", data);
};

const postLoginUser = data => {
  return http.post("/login", data);
};

const UserService = {
  postRegisterUser,
  postLoginUser,
};

export default UserService;
