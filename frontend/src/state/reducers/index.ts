import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { getProductsReducer } from "./productReducer";
import { registerReducer } from "./userReducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  register: registerReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
