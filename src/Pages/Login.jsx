import React, { use, useState } from "react";
import log from "../assets/login.png";
import { Link } from "react-router";
import { Authcontext } from "../Context/Authprovider";
import Swal from "sweetalert2";
const Login = () => {
  const { googleUser, setUser, singEmailPass } = use(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    singEmailPass(email, password)
      .then((result) => {
        const eUser = result.user;
        setUser(eUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage === "setUser is not a function") {
          errorMessage === "";
        }
      });
    e.target.reset();
  };
  const handleGoogleSignUp = () => {
    googleUser()
      .then((result) => {
        const Guser = result.user;
        console.log(Guser);
        setUser(Guser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-blue-200 p-8 flex items-center justify-center">
          <div className="w-full h-64 md:h-full flex items-center justify-center bg-blue-300 rounded-lg text-white text-lg font-bold">
            <img
              src={log}
              alt="Login Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8 lg:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="text-gray-600">Unlock your world.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                * Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                * Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={!show ? "password" : "text"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={handleShow}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 cursor-pointer"
                >
                  👁️‍🗨️
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <div className="text-center">
            <button
              className="btn bg-white text-black w-full my-2 border-[#e5e5e5]"
              onClick={handleGoogleSignUp}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <Link
              to={"/register"}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
