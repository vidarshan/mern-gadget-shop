import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAIL,
  ADD_PRODUCT_TO_CART_RESET,
  EMPTY_CART_REQUEST,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAIL,
  GET_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_FAIL,
} from "../constants/cartConstants";

export const cartReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: null,
      };
    case ADD_PRODUCT_TO_CART_FAIL:
      return { ...state, loading: false, error: action.payload };
    case GET_CART_ITEMS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case GET_CART_ITEMS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
