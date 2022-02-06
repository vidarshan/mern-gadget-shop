import {
  ADD_PRODUCT_TO_CART,
  UPDATE_CART_PRODUCT,
  DELETE_CART_PRODUCT,
  GET_CART_PRODUCTS,
} from "../constants/cartConstants";

export const cartReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        item: action.payload,
      };
    case UPDATE_CART_PRODUCT:
      return {
        ...state,
        item: action.payload,
      };

    case DELETE_CART_PRODUCT:
      return {
        ...state,
        item: action.payload,
      };
    case GET_CART_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
