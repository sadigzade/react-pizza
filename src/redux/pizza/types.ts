export type Pizza = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  count: number;
  imageUrl: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
