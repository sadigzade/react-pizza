export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export enum SortPropertyEnum {
  RATING = "rating",
  TITLE = "title",
  PRICE = "price",
}

export type TPizza = {
  id?: string;
  readonly imageUrl: string;
  readonly title: string;
  readonly types: number[];
  readonly sizes: number[];
  readonly price: number;
  readonly category: number;
  readonly rating: number;
  count?: number;
};

export type TSort = {
  readonly name: string;
  readonly sortProperty: SortPropertyEnum;
};

export type TSearchParams = {
  searchValue: string;
  categoryId: number;
  sort: TSort;
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
};

export type TCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};
