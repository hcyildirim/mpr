import { combineReducers } from "redux";
import products from "../reducers/products";
import cart from "../reducers/cart";

const rootReducer = combineReducers({ products, cart });

export default rootReducer;
