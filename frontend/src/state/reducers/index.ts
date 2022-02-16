import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import {
  createOrderReducer,
  getOrderReducer,
  orderPayReducer,
  getOrdersReducer,
  orderDeliverReducer,
  getMyOrdersReducer,
} from "./orderReducers";
import {
  addReviewReducer,
  createProductReducer,
  getProductReducer,
  getProductsReducer,
  getTopProductsReducer,
  quickSearchReducer,
} from "./productReducer";
import {
  loginReducer,
  registerReducer,
  getUsersReducer,
  updateProfileReducer,
  updateUserReducer,
} from "./userReducer";

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
  orderDeliver: orderDeliverReducer,
  createProduct: createProductReducer,
  topProducts: getTopProductsReducer,
  quickSearch: quickSearchReducer,
  myOrders: getMyOrdersReducer,
  profileUpdate: updateProfileReducer,
  userUpdate: updateUserReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
