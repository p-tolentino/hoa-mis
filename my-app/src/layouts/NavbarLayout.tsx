import React from "react";
import NAVBAR from "../components/Navbar";
// import { Outlet } from "react-router-dom";

const NavbarLayout = () => (
  <div className="App">
    <NAVBAR />
    {/* <div className="pages" style={{ margin: 30 }}>
      <Outlet />
    </div> */}
  </div>
);

export default NavbarLayout;
