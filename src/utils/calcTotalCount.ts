import { TPizza } from "../services/types/data";

export const calcTotalCount = (items: TPizza[]) => {
  return items.reduce((count, obj) => (obj.count ? obj.count + count : 0), 0);
};
