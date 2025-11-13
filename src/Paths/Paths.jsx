import React from "react";
import { Outlet } from "react-router";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Upevents from "../Pages/Upevents";
import Footer from "../Components/Footer/Footer";
import Manage from "../Pages/Manage";

const Paths = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Navbar></Navbar>
        <Outlet>
          <Home></Home>
          <Login></Login>
          <Register></Register>
          <Upevents></Upevents>
          <Manage></Manage>
        </Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Paths;
