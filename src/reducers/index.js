import { combineReducers } from "redux";
import products from "../reducers/products";
import cart from "../reducers/cart";
import list from "../reducers/list";
import filter from "../reducers/filter";

const rootReducer = combineReducers({ products, cart, list, filter });

export default rootReducer;
