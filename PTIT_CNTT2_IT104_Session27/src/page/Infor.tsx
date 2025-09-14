import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Infor() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "blue",
          height: "30px",
          alignContent: "center",
          alignItems: "center",
          fontSize:"20px",
          
        }}
      >
        <Link to="/" style={{fontWeight:"5px"}}>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div style={{ textAlign: "center" }}>
        <Outlet />
      </div>
    </>
  );
}
