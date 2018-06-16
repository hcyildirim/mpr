import { PRODUCT_ADDED_TO_RECIPE } from "../constants";

const initialState = {
  payload: [],
  isLoading: false,
  error: false
};

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ADDED_TO_RECIPE:
      return {
        ...state,
        payload: [...state.payload, action.product]
      };
    default:
      return state;
  }
}
