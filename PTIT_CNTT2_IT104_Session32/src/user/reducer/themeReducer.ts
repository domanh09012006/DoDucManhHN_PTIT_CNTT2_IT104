export const TOGGLE_THEME = "TOGGLE_THEME";

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false
};

export function themeReducer(state = initialState, action: any): ThemeState {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}
