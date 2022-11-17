import * as type from "./actionType";
const init = {
  isAuth: false,
};
export const reducer = (state = init, action) => {
  switch (action.type) {
    case type.IS_LOGIN_Auth:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
