import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { TOGGLE_THEME } from "../user/reducer/themeReducer";

const ThemeSwitcher: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{darkMode ? "Chế độ tối" : "Chế độ sáng"}</h1>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleChange} />{" "}
        Bật chế độ tối
      </label>
    </div>
  );
};

export default ThemeSwitcher;
