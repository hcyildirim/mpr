import { PRODUCT_ADDED_TO_RECIPE } from "../constants";

export function addProductToRecipe(product) {
  return dispatch => {
    dispatch(addProduct(product));
  };
}

function addProduct(product) {
  return {
    type: PRODUCT_ADDED_TO_RECIPE,
    product
  };
}
