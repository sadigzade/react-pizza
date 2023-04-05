import { TPizza } from "../services/types/data";

export const calcTotalPrice = (items: TPizza[]) => {
  return items.reduce((sum, obj) => (obj.count ? obj.price * obj.count + sum : 0), 0);
};
