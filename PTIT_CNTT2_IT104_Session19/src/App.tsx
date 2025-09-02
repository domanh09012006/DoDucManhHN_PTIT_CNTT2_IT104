import React, { Component } from "react";
import ShoppingCart from "./component/ShoppingCart";
import { ThemeProvider } from "./component/Bai2/ThemeContext";
import Header from "./component/Bai2/Header";
import Content from "./component/Bai2/Content";
import RenderCounter from "./component/RenderCounter";
import RegisterForm from "./component/RegisterForm";
import RandomQuote from "./component/RandomQuote";
import KeyTracker from "./component/KeyTracker";

export default class App extends Component {
  render() {
    return (
      <div>
        <ShoppingCart />
        <ThemeProvider>
          <Header />
          <Content />
        </ThemeProvider>
        <RenderCounter/>
        <RegisterForm/>
        <RandomQuote/>
        <KeyTracker/>
      </div>
    );
  }
}
