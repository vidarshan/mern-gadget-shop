import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { getProductsReducer } from "./productReducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
