import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const createOrderReducer = (
  state = {
    orderCreate: {},
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.CREATE_ORDER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orderCreate: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.CREATE_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const getOrderReducer = (
  state = {
    order: {},
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_ORDER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.GET_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { createOrderReducer, getOrderReducer };
