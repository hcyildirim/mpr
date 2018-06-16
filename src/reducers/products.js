import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_FAILURE
} from "../constants";

const initialState = {
  payload: [],
  isLoading: false,
  error: false
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        payload: [],
        isLoading: true
      };
    case FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.data
      };
    case FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}
