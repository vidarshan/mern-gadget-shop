import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems") || "{}")
  : null;

const cartReducer = (
  state = { cartItems: cartItemsFromStorage, shippingAddress: {} },
  action: Action
) => {
  switch (action.type) {
    case ActionType.CART_ADD_ITEM:
      const item = action.payload;

      let existItem: any;
      existItem = state.cartItems.find((x: any) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case ActionType.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x: any) => x.product !== action.payload
        ),
      };
    case ActionType.CART_SAVE_SHIPPING_ITEM:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case ActionType.CART_SAVE_PAYMENT_ITEM:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case ActionType.CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
