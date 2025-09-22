import { combineReducers, createStore } from "redux";


import productReducer from "../reducers/productReducer";
import cartReducer from "../reducers/cartReducer";
import messageReducer from "../reducers/messageReducer";
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  message: messageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
