import {
  ITEM_ADDED_TO_CART,
  ITEM_DELETED_FROM_CART,
  ITEM_MARKED_ON_CART
} from "../constants";

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

export function markItemOnCart(id) {
  return dispatch => {
    dispatch(markItem(id));
  };
}

function markItem(id) {
  return {
    type: ITEM_MARKED_ON_CART,
    id
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
