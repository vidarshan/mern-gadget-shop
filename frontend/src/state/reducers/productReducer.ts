import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const getProductsReducer = (
  state = {
    products: [],
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const getProductReducer = (
  state = {
    product: {},
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.GET_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const addReviewReducer = (
  state = {
    review: {},
    error: null,
    loading: false,
  },
  action: Action
) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionType.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        review: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.ADD_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { getProductsReducer, getProductReducer, addReviewReducer };