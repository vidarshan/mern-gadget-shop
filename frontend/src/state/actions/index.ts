import { ActionType } from "../action-types";

interface CartAddItemAction {
  type: ActionType.CART_ADD_ITEM;
  payload: any;
}

interface CartRemoveItemAction {
  type: ActionType.CART_REMOVE_ITEM;
  payload: any;
}

interface CartSaveShippingAction {
  type: ActionType.CART_SAVE_SHIPPING_ITEM;
  payload: any;
}

interface CartSavePaymentAction {
  type: ActionType.CART_SAVE_PAYMENT_ITEM;
  payload: any;
}

interface CartClearItemsAction {
  type: ActionType.CART_CLEAR_ITEMS;
  payload: any;
}

interface GetProductsRequestAction {
  type: ActionType.GET_PRODUCTS_REQUEST;
  payload?: any;
}

interface GetProductsSuccessAction {
  type: ActionType.GET_PRODUCTS_SUCCESS;
  payload: any;
}

interface GetProductsFailAction {
  type: ActionType.GET_PRODUCTS_FAIL;
  payload: any;
}

interface GetProductRequestAction {
  type: ActionType.GET_PRODUCT_REQUEST;
  payload?: any;
}

interface GetProductSuccessAction {
  type: ActionType.GET_PRODUCT_SUCCESS;
  payload: any;
}

interface GetProductFailAction {
  type: ActionType.GET_PRODUCT_FAIL;
  payload: any;
}

interface AddReviewRequestAction {
  type: ActionType.ADD_REVIEW_REQUEST;
  payload?: any;
}

interface AddReviewSuccessAction {
  type: ActionType.ADD_REVIEW_SUCCESS;
  payload: any;
}

interface AddReviewFailAction {
  type: ActionType.ADD_REVIEW_FAIL;
  payload: any;
}

interface UserLoginRequestAction {
  type: ActionType.USER_LOGIN_REQUEST;
  payload?: any;
}

interface UserLoginSuccessAction {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: any;
}

interface UserLoginFailAction {
  type: ActionType.USER_LOGIN_FAIL;
  payload: any;
}

interface UserRegisterRequestAction {
  type: ActionType.USER_REGISTER_REQUEST;
  payload?: any;
}

interface UserRegisterSuccessAction {
  type: ActionType.USER_REGISTER_SUCCESS;
  payload: any;
}

interface UserRegisterFailAction {
  type: ActionType.USER_REGISTER_FAIL;
  payload: any;
}

interface UserLogoutAction {
  type: ActionType.USER_LOGOUT;
  payload: any;
}

export type Action =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartSaveShippingAction
  | CartSavePaymentAction
  | CartClearItemsAction
  | GetProductsRequestAction
  | GetProductsSuccessAction
  | GetProductsFailAction
  | GetProductRequestAction
  | GetProductSuccessAction
  | GetProductFailAction
  | AddReviewRequestAction
  | AddReviewSuccessAction
  | AddReviewFailAction
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction
  | UserLogoutAction;
