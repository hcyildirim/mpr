import { combineReducers } from "redux";
import products from "../reducers/products";
import recipes from "../reducers/recipes";

const rootReducer = combineReducers({ products, recipes });

export default rootReducer;
