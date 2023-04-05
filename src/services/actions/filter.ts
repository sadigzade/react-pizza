import { SET_CATEGORY_ID, SET_FILTERS, SET_SEARCH_VALUE, SET_SORT } from "../constants/filter";
import { TSearchParams, TSort } from "../types/data";

type SetCategoryIdAction = {
  readonly type: typeof SET_CATEGORY_ID;
  readonly index: number;
};
type SetSearchValueAction = {
  readonly type: typeof SET_SEARCH_VALUE;
  readonly searchValue: string;
};
type SetSortAction = {
  readonly type: typeof SET_SORT;
  readonly sort: Readonly<TSort>;
};
type SetFiltersAction = {
  readonly type: typeof SET_FILTERS;
  readonly searchParams: Readonly<TSearchParams>;
};

export type FilterActions =
  | SetCategoryIdAction
  | SetSearchValueAction
  | SetSortAction
  | SetFiltersAction;

export const setCategoryId = (index: number): SetCategoryIdAction => {
  return {
    type: SET_CATEGORY_ID,
    index,
  };
};

export const setSearchValue = (searchValue: string): SetSearchValueAction => {
  return {
    type: SET_SEARCH_VALUE,
    searchValue,
  };
};

export const setSort = (sort: Readonly<TSort>): SetSortAction => {
  return {
    type: SET_SORT,
    sort,
  };
};

export const setFilters = (searchParams: Readonly<TSearchParams>): SetFiltersAction => {
  return {
    type: SET_FILTERS,
    searchParams,
  };
};
