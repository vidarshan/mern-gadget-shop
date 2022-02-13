import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import {
  createOrderReducer,
  getOrderReducer,
  orderPayReducer,
  getOrdersReducer,
} from "./orderReducers";
import {
  addReviewReducer,
  getProductReducer,
  getProductsReducer,
} from "./productReducer";
import { loginReducer, registerReducer, getUsersReducer } from "./userReducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  product: getProductReducer,
  review: addReviewReducer,
  userRegister: registerReducer,
  userLogin: loginReducer,
  order: getOrderReducer,
  orderCreate: createOrderReducer,
  orderPay: orderPayReducer,
  users: getUsersReducer,
  orders: getOrdersReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
