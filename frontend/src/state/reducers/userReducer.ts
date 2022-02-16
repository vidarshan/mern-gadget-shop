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

    case ActionType.USER_LOGOUT:
      return { ...state, userInfo: null, loading: false, error: null };
    default:
      return state;
  }
};

const getUsersReducer = (
  state = {
    users: [],
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.GET_USERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const updateProfileReducer = (
  state = {
    profileUpdate: {},
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profileUpdate: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.UPDATE_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActionType.UPDATE_PROFILE_RESET:
      return {
        ...state,
        loading: false,
        profileUpdate: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const updateUserReducer = (
  state = {
    userUpdate: {},
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userUpdate: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.UPDATE_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActionType.UPDATE_PROFILE_RESET:
      return {
        ...state,
        loading: false,
        userUpdate: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  registerReducer,
  loginReducer,
  getUsersReducer,
  updateProfileReducer,
  updateUserReducer,
};
