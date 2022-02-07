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

export { getProductsReducer };
