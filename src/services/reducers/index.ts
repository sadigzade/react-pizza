import { combineReducers } from "redux";
import { pizzasReducer } from "./pizzas";
import { filterReducer } from "./filter";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filter: filterReducer,
  cart: cartReducer,
});
