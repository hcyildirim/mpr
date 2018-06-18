import { ITEM_ADDED_TO_CART, ITEM_DELETED_FROM_CART } from "../constants";

export function addItemToCart(id) {
  return dispatch => {
    dispatch(addItem(id));
  };
}

function addItem(item) {
  return {
    type: ITEM_ADDED_TO_CART,
    item
  };
}

export function deleteItemFromCart(id) {
  return dispatch => {
    dispatch(deleteItem(id));
  };
}

function deleteItem(id) {
  return {
    type: ITEM_DELETED_FROM_CART,
    id
  };
}
