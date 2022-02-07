import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") || "{}")
  : null;

const registerReducer = (
  state = {
    userInfo: userInfoFromStorage,
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const loginReducer = (
  state = {
    userInfo: userInfoFromStorage,
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { registerReducer, loginReducer };
