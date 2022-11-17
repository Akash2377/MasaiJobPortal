import * as type from "./actionType";
export const isLoginSuccess = (payload) => {
  return { type: type.IS_LOGIN_Auth, payload: payload };
};
