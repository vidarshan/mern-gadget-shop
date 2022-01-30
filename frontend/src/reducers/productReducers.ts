import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getProductsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getProductReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
