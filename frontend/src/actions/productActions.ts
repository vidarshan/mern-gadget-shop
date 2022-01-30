import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });

    const { data } = await axios.get("/api/v1/products");

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error,
    });
  }
};

export const getProduct = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_PRODUCT_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/products/${id}`);

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error,
    });
  }
};
