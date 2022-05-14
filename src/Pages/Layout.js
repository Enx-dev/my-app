import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer, Navbar } from "../Components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;
