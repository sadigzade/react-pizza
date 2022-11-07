import { CartItem } from '../redux/cart/types';

export const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((count, obj) => obj.count + count, 0);
};
