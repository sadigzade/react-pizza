import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../store";
import { PizzasActions } from "../actions/pizzas";
import { FilterActions } from "../actions/filter";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
export type TApplicationActions = PizzasActions | FilterActions;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;
