import { combineReducers, createStore } from "redux";
import userReducer from "../user/reducer/userReducer";
import listReducer from "../user/reducer/ListReducer";
import { counterReducer } from "../user/reducer/CounterReducer";
import randomReducer from "../user/reducer/RandomReducer";
import { changeReducer } from "../user/reducer/CompanyReducer";
import { themeReducer } from "../user/reducer/themeReducer";
import authReducer from "../user/reducer/authReducer";

const rootReducer = combineReducers({
  user: userReducer,
  list: listReducer,
  counter: counterReducer,
  random: randomReducer,
  company: changeReducer,
  theme: themeReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);
export default store;
