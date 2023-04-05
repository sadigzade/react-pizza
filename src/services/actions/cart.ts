import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_MINUS_ITEM,
  CART_REMOVE_ITEM,
} from "../constants/cart";
import { TCartItem } from "../types/data";

type CartAddItemAction = {
  readonly type: typeof CART_ADD_ITEM;
  readonly item: Readonly<TCartItem>;
};
type CartMinusItemAction = {
  readonly type: typeof CART_MINUS_ITEM;
  readonly id: string;
};
type CartRemoveItemAction = {
  readonly type: typeof CART_REMOVE_ITEM;
  readonly id: string;
};
type CartClearItemsAction = {
  readonly type: typeof CART_CLEAR_ITEMS;
};

export type CartActions =
  | CartAddItemAction
  | CartMinusItemAction
  | CartRemoveItemAction
  | CartClearItemsAction;

export const cartAddItem = (item: Readonly<TCartItem>): CartAddItemAction => {
  return {
    type: CART_ADD_ITEM,
    item,
  };
};

export const cartMinusItem = (id: string): CartMinusItemAction => {
  return {
    type: CART_MINUS_ITEM,
    id,
  };
};

export const cartRemoveItem = (id: string): CartRemoveItemAction => {
  return {
    type: CART_REMOVE_ITEM,
    id,
  };
};

export const cartClearItems = (): CartClearItemsAction => {
  return {
    type: CART_CLEAR_ITEMS,
  };
};
