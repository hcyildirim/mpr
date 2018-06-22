import { createSelector } from "reselect";
import { SHOW_ALL, SHOW_MARKED, SHOW_ACTIVE } from "../constants";

const getFilter = state => state.filter;
const getItems = state => state.cart.payload;

export const getVisibleItems = createSelector(
  [getFilter, getItems],
  (visibilityFilter, items) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return items;
      case SHOW_MARKED:
        return items.filter(i => i.marked);
      case SHOW_ACTIVE:
        return items.filter(i => !i.marked);
    }
  }
);
