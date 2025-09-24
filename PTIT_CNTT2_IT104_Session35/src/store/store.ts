import { configureStore, ReducerType } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import randomReducer from "../feature/counter/randomSlice";
import themeReducer from "../feature/counter/Theme";
import displayReducer from '../feature/counter/displaySlice'
import menuReducer from "../feature/counter/menuSlice"
import languageReducer from "../feature/counter/languageSlice"
import favoritesReducer from "../feature/counter/favoritesSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    random: randomReducer,
    theme: themeReducer,
    display: displayReducer,
    menu: menuReducer,
    language: languageReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
