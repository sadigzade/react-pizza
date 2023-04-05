import { v4 as uuid } from "uuid";
import { AppDispatch, AppThunk } from "../types";
import { PIZZAS_REQUEST, PIZZAS_REQUEST_ERROR, PIZZAS_REQUEST_SUCCESS } from "../constants/pizzas";
import { SearchPizzaParams, TPizza } from "../types/data";
import { request } from "../../utils/request";

type PizzasRequestAction = {
  readonly type: typeof PIZZAS_REQUEST;
};
type PizzasRequestSuccessAction = {
  readonly type: typeof PIZZAS_REQUEST_SUCCESS;
  readonly pizzas: TPizza[];
};
type PizzasRequestErrorAction = {
  readonly type: typeof PIZZAS_REQUEST_ERROR;
  readonly error: any;
};

export type PizzasActions =
  | PizzasRequestAction
  | PizzasRequestSuccessAction
  | PizzasRequestErrorAction;

export const pizzasRequest = (): PizzasRequestAction => {
  return {
    type: PIZZAS_REQUEST,
  };
};

export const pizzasRequestSuccess = (pizzas: TPizza[]): PizzasRequestSuccessAction => {
  return {
    type: PIZZAS_REQUEST_SUCCESS,
    pizzas,
  };
};

export const pizzasRequestError = (error: any): PizzasRequestErrorAction => {
  return {
    type: PIZZAS_REQUEST_ERROR,
    error,
  };
};

export const pizzasRequestFetch: AppThunk =
  (params: SearchPizzaParams) => async (dispatch: AppDispatch) => {
    const { sortBy, order, category, search } = params;

    dispatch(pizzasRequest());

    try {
      const response = await request(`/items?${sortBy}&${order}&${category}&${search}`);
      const pizzas = response.map((pizza: TPizza) => ({ ...pizza, id: uuid() }));

      dispatch(pizzasRequestSuccess(pizzas));
    } catch (error) {
      dispatch(pizzasRequestError(error));
    }
  };

// export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
//   'pizza/fetchPizzasStatus',
//   async (params) => {
//     const { sortBy, order, category, search } = params;
//     const { data } = await axios.get<Pizza[]>(
//       `https://635ad7456f97ae73a637df53.mockapi.io/items?${sortBy}${order}${category}${search}`,
//     );
//     return data;
//   },
// );
