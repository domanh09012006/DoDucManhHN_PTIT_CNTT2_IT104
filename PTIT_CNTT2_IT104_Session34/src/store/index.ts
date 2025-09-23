import { createStore, combineReducers } from "redux";
import { studentReducer } from "./reducers/studentReducer";

const rootReducer = combineReducers({
  studentState: studentReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
