import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { getProductsReducer } from "./productReducer";
import { loginReducer, registerReducer } from "./userReducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  userRegister: registerReducer,
  userLogin: loginReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
