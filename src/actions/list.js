import { LIST_ADDED, LIST_DELETED } from "../constants";

export function addList(list) {
  return dispatch => {
    dispatch(listAdded(list));
  };
}

function listAdded(list) {
  return {
    type: LIST_ADDED,
    list
  };
}

export function deleteList(id) {
  return dispatch => {
    dispatch(listDeleted(id));
  };
}

function listDeleted(id) {
  return {
    type: LIST_DELETED,
    id
  };
}
