import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { store } from "../store";

export const addToCart = (id: string, qty: number) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    const { data } = await axios.get(`/api/v1/products/${id}`);

    dispatch({
      type: ActionType.CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export const removeFromCart = (id: string) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    dispatch({
      type: ActionType.CART_REMOVE_ITEM,
      payload: id,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export const saveShippingAddress = (data: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CART_SAVE_SHIPPING_ITEM,
      payload: data,
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };
};

export const savePaymentMethod = (data: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CART_SAVE_PAYMENT_ITEM,
      payload: data,
    });

    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };
};

export const getProducts = (page: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_PRODUCTS_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/products?pageNumber=${page}`);

      dispatch({
        type: ActionType.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_PRODUCTS_FAIL,
        payload: error,
      });
    }
  };
};

export const quickSearchProducts = (keyword: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.QUICK_SEARCH_REQUEST,
      });

      const { data } = await axios.get(
        `/api/v1/products/search?keyword=${keyword}`
      );

      dispatch({
        type: ActionType.QUICK_SEARCH_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.QUICK_SEARCH_FAIL,
        payload: error,
      });
    }
  };
};

export const getProduct = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_PRODUCT_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/products/${id}`);

      dispatch({
        type: ActionType.GET_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_PRODUCT_FAIL,
        payload: error,
      });
    }
  };
};

export const addReview = (id: string, rating: number, comment: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.ADD_REVIEW_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `/api/v1/products/${id}/reviews`,
        { rating, comment },
        config
      );

      dispatch({
        type: ActionType.ADD_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.ADD_REVIEW_FAIL,
        payload: error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
};

export const register = (name: string, email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = {
        name,
        email,
        password,
      };

      const { data } = await axios.post("/api/v1/users", formData, config);

      dispatch({
        type: ActionType.USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_REGISTER_FAIL,
        payload: error,
      });
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = {
        email,
        password,
      };

      const { data } = await axios.post(
        "/api/v1/users/login",
        formData,
        config
      );

      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };
};

export const createOrder = (
  orderItems: any,
  shippingAddress: any,
  paymentMethod: string,
  itemsPrice: any,
  taxPrice: any,
  shippingPrice: any,
  totalPrice: any
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.CREATE_ORDER_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      };

      const { data } = await axios.post("/api/v1/orders", formData, config);

      dispatch({
        type: ActionType.CREATE_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.CREATE_ORDER_FAIL,
        payload: error,
      });
    }
  };
};

export const getOrder = (id: any) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    try {
      dispatch({
        type: ActionType.GET_ORDER_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/orders/${id}`, config);

      dispatch({
        type: ActionType.GET_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ORDER_FAIL,
        payload: error,
      });
    }
  };
};

export const payOrder = (id: any, paymentResult: any) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    try {
      dispatch({
        type: ActionType.ORDER_PAY_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `/api/v1/orders/${id}/pay`,
        paymentResult,
        config
      );

      dispatch({
        type: ActionType.ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.ORDER_PAY_FAIL,
        payload: error,
      });
    }
  };
};

export const getUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_USERS_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/users`, config);

      dispatch({
        type: ActionType.GET_USERS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_USERS_FAIL,
        payload: error,
      });
    }
  };
};

export const getOrders = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_ORDERS_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/orders`, config);

      dispatch({
        type: ActionType.GET_ORDERS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_ORDERS_FAIL,
        payload: error,
      });
    }
  };
};

export const deliverOrder = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.ORDER_DELIVER_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `/api/v1/orders/${id}/deliver`,
        {},
        config
      );

      dispatch({
        type: ActionType.ORDER_DELIVER_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.ORDER_DELIVER_FAIL,
        payload: error,
      });
    }
  };
};

export const createProduct = (
  name: string,
  price: number,
  image: string,
  brand: string,
  category: string,
  countInStock: number,
  numReviews: number,
  description: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.CREATE_PRODUCT_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = {
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        numReviews,
        description,
      };

      const { data } = await axios.post(`/api/v1/products`, formData, config);

      dispatch({
        type: ActionType.CREATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.CREATE_PRODUCT_FAIL,
        payload: error,
      });
    }
  };
};

export const getTopProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_TOP_PRODUCTS_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/products/top`);

      dispatch({
        type: ActionType.GET_TOP_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_TOP_PRODUCTS_FAIL,
        payload: error,
      });
    }
  };
};

export const getMyOrders = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_MY_ORDERS_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(`/api/v1/orders/myorders`, config);

      dispatch({
        type: ActionType.GET_MY_ORDERS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_MY_ORDERS_FAIL,
        payload: error,
      });
    }
  };
};

export const updateProfile = (
  name: string,
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch<Action>, getState: any) => {
    try {
      dispatch({
        type: ActionType.UPDATE_PROFILE_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = {
        name,
        email,
        password,
      };

      const { data } = await axios.put(
        `/api/v1/users/profile`,
        formData,
        config
      );

      dispatch({
        type: ActionType.UPDATE_PROFILE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ActionType.UPDATE_PROFILE_RESET,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_PROFILE_FAIL,
        payload: error,
      });
    }
  };
};

export const updateUser = (id: string, isAdmin: boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.UPDATE_USER_REQUEST,
      });

      const token = store.getState().userLogin.userInfo.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const formData = {
        isAdmin,
      };

      const { data } = await axios.put(`/api/v1/users/${id}`, formData, config);

      dispatch({
        type: ActionType.UPDATE_USER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ActionType.UPDATE_USER_RESET,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UPDATE_USER_FAIL,
        payload: error,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<Action>) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: ActionType.USER_LOGOUT, payload: {} });
  };
};
