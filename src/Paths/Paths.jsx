import React from "react";
import { Outlet } from "react-router";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Paths = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <Navbar></Navbar>
        <Outlet>
          <Home></Home>
          <Login></Login>
          <Register></Register>
        </Outlet>
      </div>
    </>
  );
};

export default Paths;
