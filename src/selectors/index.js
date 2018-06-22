import { createSelector } from "reselect";

const getItems = state => state.cart.payload;

export const getMarkedItems = createSelector([getItems], items => {
  return items.filter(i => i.marked);
});
