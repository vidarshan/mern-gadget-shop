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
    case ActionType.CREATE_ORDER_RESET:
      return { ...state, loading: false, orderCreate: {} };
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

const orderPayReducer = (
  state = {
    success: false,
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.ORDER_PAY_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.ORDER_PAY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      };
    case ActionType.ORDER_PAY_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActionType.ORDER_PAY_RESET:
      return { ...state, loading: false, success: {}, error: action.payload };
    default:
      return state;
  }
};

const getOrdersReducer = (
  state = {
    orders: [],
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_ORDERS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.GET_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const orderDeliverReducer = (
  state = {
    success: false,
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.ORDER_DELIVER_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.ORDER_DELIVER_SUCCESS:
      return {
        ...state,
        success: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.ORDER_DELIVER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ActionType.ORDER_DELIVER_RESET:
      return {
        ...state,
        success: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const getMyOrdersReducer = (
  state = {
    myOrders: false,
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_MY_ORDERS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        myOrders: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.GET_MY_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  createOrderReducer,
  getOrderReducer,
  orderPayReducer,
  getOrdersReducer,
  orderDeliverReducer,
  getMyOrdersReducer,
};
