import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Menu } from "./Menu";
import { Main } from "./Main";
import { Navigation } from "./Navigation";
function UserLayout() {
  return (
    <>
    <h1>Bai7</h1>
      <Header />
      <Sidebar />

      <div style={{ display: "flex" }}>
        <Menu />
        <Main />
        <Navigation />
      </div>
    </>
  );
}
export default UserLayout;
