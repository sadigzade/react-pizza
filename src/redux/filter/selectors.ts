import { RootState } from '../store';

export const selectCart = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
