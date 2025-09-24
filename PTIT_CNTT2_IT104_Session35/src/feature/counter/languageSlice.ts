import { createSlice } from "@reduxjs/toolkit";

export type LanguageState = {
  current: "en" | "vi";
};

const initialState: LanguageState = {
  current: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setEnglish: (state) => {
      state.current = "en";
    },
    setVietnamese: (state) => {
      state.current = "vi";
    },
  },
});

export const { setEnglish, setVietnamese } = languageSlice.actions;
export default languageSlice.reducer;
