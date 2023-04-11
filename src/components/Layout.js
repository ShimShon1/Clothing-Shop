import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <Nav inCart={props.inCart} />

      <Outlet />
    </>
  );
}
