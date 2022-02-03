import axios from "axios";
import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAIL,
} from "../constants/cartConstants";

export const addToCart =
  (productId: string, quantity: number) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: ADD_PRODUCT_TO_CART_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/products/${productId}`);

      console.log(getState);

      dispatch({
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: data,
      });
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
