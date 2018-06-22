import { LIST_ADDED, LIST_DELETED } from "../constants";

const initialState = {
  payload: [],
  isLoading: false,
  error: false
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_ADDED:
      return {
        ...state,
        payload: [...state.payload, [action.list]]
      };
    case LIST_DELETED:
      return {
        ...state,
        payload: state.payload.filter(list => list.id !== action.id)
      };
    default:
      return state;
  }
}
