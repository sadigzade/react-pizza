import { CartActions } from "../actions/cart";
import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_MINUS_ITEM,
  CART_REMOVE_ITEM,
} from "../constants/cart";
import { TCartItem } from "../types/data";

type CartState = {
  items: TCartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartReducer = (state = initialState, action: CartActions): CartState => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const findItem = state.items.find((item) => item.id === action.item.id);

      if (findItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.item.id ? { ...item, count: item.count + 1 } : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, action.item],
      };

      // const findItem = state.items.find((item) => item.id === action.item.id);

      // if (findItem && findItem.count) {
      //   const filterItems = state.items.filter((item) => item.id !== action.item.id);
      //   findItem.count++;

      //   return {
      //     ...state,
      //     items: [...filterItems, findItem],
      //   };
      // }

      // return {
      //   ...state,
      //   items: [...state.items, { ...action.item, count: 1 }],
      // };
    }
    case CART_MINUS_ITEM: {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item,
        ),
      };
    }
    case CART_REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    case CART_CLEAR_ITEMS: {
      return {
        ...state,
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};
