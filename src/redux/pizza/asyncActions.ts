import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Pizza } from './types';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://635ad7456f97ae73a637df53.mockapi.io/items?${sortBy}${order}${category}${search}`,
    );
    return data;
  },
);
