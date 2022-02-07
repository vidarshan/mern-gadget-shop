import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAIL,
} from "../constants/productConstants";

// export const getProducts = () => async (dispatch: any) => {
//   try {
//     dispatch({
//       type: GET_PRODUCTS_REQUEST,
//     });

//     const { data } = await axios.get("/api/v1/products");

//     dispatch({
//       type: GET_PRODUCTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error: any) {
//     dispatch({
//       type: GET_PRODUCTS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const getProduct = (id: string) => async (dispatch: any) => {
//   try {
//     dispatch({
//       type: GET_PRODUCT_REQUEST,
//     });

//     const { data } = await axios.get(`/api/v1/products/${id}`);

//     dispatch({
//       type: GET_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error: any) {
//     dispatch({
//       type: GET_PRODUCT_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const addReview =
//   (id: string, rating: number, comment: string) =>
//   async (dispatch: any, getState: any) => {
//     try {
//       dispatch({
//         type: ADD_REVIEW_REQUEST,
//       });

//       const {
//         userLogin: { userInfo },
//       } = getState();

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };

//       const { data } = await axios.post(
//         `/api/v1/products/${id}/review`,
//         { rating, comment },
//         config
//       );

//       dispatch({
//         type: ADD_REVIEW_SUCCESS,
//         payload: data,
//       });
//     } catch (error: any) {
//       dispatch({
//         type: ADD_REVIEW_FAIL,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   };
