import {
  ITEM_ADDED_TO_CART,
  ITEM_DELETED_FROM_CART,
  ITEM_MARKED_ON_CART
} from "../constants";

const initialState = {
  payload: [],
  isLoading: false,
  error: false
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_ADDED_TO_CART:
      return {
        ...state,
        payload: [...state.payload, action.item]
      };
    case ITEM_DELETED_FROM_CART:
      return {
        ...state,
        payload: state.payload.filter(item => item.id !== action.id)
      };
    case ITEM_MARKED_ON_CART:
      return {
        ...state,
        payload: state.payload.map(
          item =>
            item.id === action.id ? { ...item, marked: !item.marked } : item
        )
      };
    default:
      return state;
  }
}
