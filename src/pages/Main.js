import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = () => (
  <div className="main">
    <Navbar />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Main;
