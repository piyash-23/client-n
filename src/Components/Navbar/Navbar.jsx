import React, { use } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../../Context/Authprovider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, out } = use(Authcontext);
  const handleSignout = () => {
    out().then(
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log Out Successful",
        showConfirmButton: false,
        timer: 1500,
      })
    );
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink to={"/upcoming"}>Upcoming Events</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-[100px]" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-normal text-[16px]">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleSignout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <a href="/login" className="btn login">
              Login
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
