import { combineReducers } from "redux";
import products from "../reducers/products";
import cart from "../reducers/cart";
import list from "../reducers/list";

const rootReducer = combineReducers({ products, cart, list });

export default rootReducer;
