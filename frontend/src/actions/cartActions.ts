import axios from "axios";
import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAIL,
} from "../constants/cartConstants";
import find from "lodash.find";
import filter from "lodash.filter";

export const addToCart =
  (productId: string, quantity: number) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: ADD_PRODUCT_TO_CART_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/products/${productId}`);

      let currentCartItems = localStorage.getItem("cartItems");

      if (currentCartItems === null) {
        let allCartItems = [];
        allCartItems.push({ product: data.product, quantity: quantity });
        localStorage.setItem("cartItems", JSON.stringify(allCartItems));
      } else {
        let newCartItems = JSON.parse(currentCartItems);
        if (
          filter(newCartItems, function (o: any) {
            return o.product._id === productId;
          }).length === 0
        ) {
          newCartItems.push({ product: data.product, quantity: quantity });
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          dispatch({
            type: ADD_PRODUCT_TO_CART_SUCCESS,
            payload: "Item added to the cart",
          });
        } else {
          dispatch({
            type: ADD_PRODUCT_TO_CART_FAIL,
            payload: "Item already exists in the cart",
          });
        }
      }
    } catch (error: any) {
      dispatch({
        type: ADD_PRODUCT_TO_CART_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
