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

interface AddReviewResetAction {
  type: ActionType.ADD_REVIEW_RESET;
  payload?: any;
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

interface CreateOrderRequestAction {
  type: ActionType.CREATE_ORDER_REQUEST;
  payload?: any;
}

interface CreateOrderSuccessAction {
  type: ActionType.CREATE_ORDER_SUCCESS;
  payload: any;
}

interface CreateOrderFailAction {
  type: ActionType.CREATE_ORDER_FAIL;
  payload: any;
}

interface CreateOrderResetAction {
  type: ActionType.CREATE_ORDER_RESET;
  payload: any;
}

interface GetOrderRequestAction {
  type: ActionType.GET_ORDER_REQUEST;
  payload?: any;
}

interface GetOrderSuccessAction {
  type: ActionType.GET_ORDER_SUCCESS;
  payload: any;
}

interface GetOrderFailAction {
  type: ActionType.GET_ORDER_FAIL;
  payload: any;
}

interface OrderPayRequestAction {
  type: ActionType.ORDER_PAY_REQUEST;
  payload?: any;
}

interface OrderPaySuccessAction {
  type: ActionType.ORDER_PAY_SUCCESS;
  payload: any;
}

interface OrderPayFailAction {
  type: ActionType.ORDER_PAY_FAIL;
  payload: any;
}

interface OrderPayResetAction {
  type: ActionType.ORDER_PAY_RESET;
  payload: any;
}

interface GetUsersSuccessAction {
  type: ActionType.GET_USERS_REQUEST;
  payload?: any;
}

interface GetUsersFailAction {
  type: ActionType.GET_USERS_SUCCESS;
  payload: any;
}

interface GetUsersRequestAction {
  type: ActionType.GET_USERS_FAIL;
  payload: any;
}

interface GetOrdersSuccessAction {
  type: ActionType.GET_ORDERS_REQUEST;
  payload?: any;
}

interface GetOrdersFailAction {
  type: ActionType.GET_ORDERS_SUCCESS;
  payload: any;
}

interface GetOrdersRequestAction {
  type: ActionType.GET_ORDERS_FAIL;
  payload: any;
}

interface OrderDeliverSuccessAction {
  type: ActionType.ORDER_DELIVER_SUCCESS;
  payload?: any;
}

interface OrderDeliverFailAction {
  type: ActionType.ORDER_DELIVER_FAIL;
  payload: any;
}

interface OrderDeliverRequestAction {
  type: ActionType.ORDER_DELIVER_REQUEST;
  payload?: any;
}

interface OrderDeliverResetAction {
  type: ActionType.ORDER_DELIVER_RESET;
  payload?: any;
}

interface CreateProductRequestAction {
  type: ActionType.CREATE_PRODUCT_REQUEST;
  payload?: any;
}
interface CreateProductSuccessAction {
  type: ActionType.CREATE_PRODUCT_SUCCESS;
  payload?: any;
}

interface CreateProductFailAction {
  type: ActionType.CREATE_PRODUCT_FAIL;
  payload: any;
}

interface GetTopProductsRequestAction {
  type: ActionType.GET_TOP_PRODUCTS_REQUEST;
  payload?: any;
}
interface GetTopProductsSuccessAction {
  type: ActionType.GET_TOP_PRODUCTS_SUCCESS;
  payload?: any;
}

interface GetTopProductsFailAction {
  type: ActionType.GET_TOP_PRODUCTS_FAIL;
  payload: any;
}

interface QuickSearchRequestAction {
  type: ActionType.QUICK_SEARCH_REQUEST;
  payload?: any;
}
interface QuickSearchSuccessAction {
  type: ActionType.QUICK_SEARCH_SUCCESS;
  payload?: any;
}

interface QuickSearchFailAction {
  type: ActionType.QUICK_SEARCH_FAIL;
  payload: any;
}

interface GetMyOrdersRequestAction {
  type: ActionType.GET_MY_ORDERS_REQUEST;
  payload?: any;
}
interface GetMyOrdersSuccessAction {
  type: ActionType.GET_MY_ORDERS_SUCCESS;
  payload?: any;
}

interface GetMyOrdersFailAction {
  type: ActionType.GET_MY_ORDERS_FAIL;
  payload: any;
}

interface UpdateProfileRequestAction {
  type: ActionType.UPDATE_PROFILE_REQUEST;
  payload?: any;
}
interface UpdateProfileSuccessAction {
  type: ActionType.UPDATE_PROFILE_SUCCESS;
  payload?: any;
}

interface UpdateProfileFailAction {
  type: ActionType.UPDATE_PROFILE_FAIL;
  payload: any;
}

interface UpdateProfileResetAction {
  type: ActionType.UPDATE_PROFILE_RESET;
  payload?: any;
}
interface UpdateUserRequestAction {
  type: ActionType.UPDATE_USER_REQUEST;
  payload?: any;
}

interface UpdateUserSuccessAction {
  type: ActionType.UPDATE_USER_SUCCESS;
  payload?: any;
}

interface UpdateUserFailAction {
  type: ActionType.UPDATE_USER_FAIL;
  payload: any;
}

interface UpdateUserResetAction {
  type: ActionType.UPDATE_USER_RESET;
  payload?: any;
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
  | AddReviewResetAction
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction
  | UserLogoutAction
  | CreateOrderRequestAction
  | CreateOrderSuccessAction
  | CreateOrderFailAction
  | CreateOrderResetAction
  | GetOrderRequestAction
  | GetOrderSuccessAction
  | GetOrderFailAction
  | OrderPayRequestAction
  | OrderPaySuccessAction
  | OrderPayFailAction
  | OrderPayResetAction
  | GetUsersSuccessAction
  | GetUsersFailAction
  | GetUsersRequestAction
  | GetOrdersRequestAction
  | GetOrdersSuccessAction
  | GetOrdersFailAction
  | OrderDeliverRequestAction
  | OrderDeliverSuccessAction
  | OrderDeliverFailAction
  | OrderDeliverResetAction
  | CreateProductRequestAction
  | CreateProductSuccessAction
  | CreateProductFailAction
  | GetTopProductsRequestAction
  | GetTopProductsSuccessAction
  | GetTopProductsFailAction
  | QuickSearchRequestAction
  | QuickSearchSuccessAction
  | QuickSearchFailAction
  | GetMyOrdersRequestAction
  | GetMyOrdersSuccessAction
  | GetMyOrdersFailAction
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailAction
  | UpdateProfileResetAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | UpdateUserResetAction;
