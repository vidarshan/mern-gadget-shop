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

export type Action =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartSaveShippingAction
  | CartSavePaymentAction
  | CartClearItemsAction;
