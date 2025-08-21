import React, { Component } from "react";
interface State {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
}
export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: "dark",
      language: "english",
    };
  }

  render() {
    const { theme, language } = this.state;
    const appStyle: React.CSSProperties = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      padding: "20px",
    };
    return (
      <div style={appStyle}>
        <h2>Nen: {theme === "light" ? "Sang" : "Toi"}</h2>
        <h2>Ngon ngu: {language === "english" ? "English" : "Tieng Viet"}</h2>
      </div>
    );
  }
}
