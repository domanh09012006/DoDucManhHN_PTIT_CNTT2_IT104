import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "3rem" }}>My Themed App</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
}
export default Header;
