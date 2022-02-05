import axios from "axios";
import {
  ADD_PRODUCT_TO_CART,
  GET_CART_PRODUCTS,
  UPDATE_CART_PRODUCT,
  DELETE_CART_PRODUCT,
} from "../constants/cartConstants";
import filter from "lodash.filter";

export const addToCart =
  (productId: string, quantity: number) => async (dispatch: any) => {
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
          type: ADD_PRODUCT_TO_CART,
          payload: "Item added to the cart",
        });
      } else {
        newCartItems.map((item: any) => {
          if (item.product._id === productId) {
            if (item.quantity !== quantity) {
              let selectedProductIndex = newCartItems.indexOf(item);
              newCartItems[selectedProductIndex].quantity = quantity;
              localStorage.setItem("cartItems", JSON.stringify(newCartItems));
              dispatch({
                type: UPDATE_CART_PRODUCT,
                payload: "Item updated",
              });
            }
          }
        });
      }
    }
  };

export const getCart = () => async (dispatch: any) => {
  let cartItems = localStorage.getItem("cartItems");

  dispatch({
    type: GET_CART_PRODUCTS,
    payload: cartItems,
  });
};

export const deleteCartProduct =
  (productId: string) => async (dispatch: any) => {
    let currentCartItems = localStorage.getItem("cartItems");

    if (currentCartItems !== null) {
      let cartItems = JSON.parse(currentCartItems);
      let newCartItems = filter(cartItems, (item: any) => {
        return item.product._id !== productId;
      });

      localStorage.setItem("cartItems", JSON.stringify(newCartItems));

      dispatch({
        type: DELETE_CART_PRODUCT,
        payload: newCartItems,
      });
    }
  };
