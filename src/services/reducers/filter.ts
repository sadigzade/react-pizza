import { FilterActions } from "../actions/filter";
import { SET_CATEGORY_ID, SET_FILTERS, SET_SEARCH_VALUE, SET_SORT } from "../constants/filter";
import { SortPropertyEnum } from "../types/data";

type FilterState = {
  searchValue: string;
  categoryId: number;
  sort: {
    name: string;
    sortProperty: SortPropertyEnum;
  };
};

const initialState: FilterState = {
  searchValue: "",
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING,
  },
};

export const filterReducer = (state = initialState, action: FilterActions): FilterState => {
  switch (action.type) {
    case SET_CATEGORY_ID: {
      return {
        ...state,
        categoryId: action.index,
      };
    }
    case SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.searchValue,
      };
    }
    case SET_SORT: {
      return {
        ...state,
        sort: action.sort,
      };
    }
    case SET_FILTERS: {
      return {
        ...state,
        categoryId: Number(action.searchParams.categoryId),
        sort: action.searchParams.sort,
      };
    }
    default: {
      return state;
    }
  }
};
