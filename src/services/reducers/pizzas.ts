import { PizzasActions } from "../actions/pizzas";
import { PIZZAS_REQUEST, PIZZAS_REQUEST_ERROR, PIZZAS_REQUEST_SUCCESS } from "../constants/pizzas";
import { Status, TPizza } from "../types/data";

type PizzasState = {
  status: Status;
  pizzas: ReadonlyArray<TPizza>;
  error: any;
};

const initialState: PizzasState = {
  status: Status.LOADING,
  pizzas: [],
  error: null,
};

export const pizzasReducer = (state = initialState, action: PizzasActions): PizzasState => {
  switch (action.type) {
    case PIZZAS_REQUEST: {
      return {
        ...state,
        status: Status.LOADING,
      };
    }
    case PIZZAS_REQUEST_SUCCESS: {
      return {
        ...state,
        status: Status.SUCCESS,
        pizzas: action.pizzas,
      };
    }
    case PIZZAS_REQUEST_ERROR: {
      return {
        ...state,
        status: Status.ERROR,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
