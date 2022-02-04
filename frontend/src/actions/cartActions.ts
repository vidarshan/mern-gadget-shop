import axios from "axios";
import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAIL,
  GET_CART_ITEMS_FAIL,
  GET_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS,
} from "../constants/cartConstants";
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

export const getCart = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: GET_CART_ITEMS_REQUEST,
    });

    let cartItems = localStorage.getItem("cartItems");
    console.log(cartItems);

    dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: cartItems,
    });
  } catch (error: any) {
    dispatch({
      type: GET_CART_ITEMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
