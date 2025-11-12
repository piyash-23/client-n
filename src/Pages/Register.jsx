import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import regI from "../assets/register.png";
import { Link } from "react-router";
import { Authcontext } from "../Context/Authprovider";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [show, setShow] = useState(false);
  const [cShow, setCshow] = useState(false);
  const { createWithEmail, googleUser, user, setUser } = use(Authcontext);

  const handleShow = () => {
    setShow(!show);
  };
  const handleCshow = () => {
    setCshow(!cShow);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("পাসওয়ার্ড এবং নিশ্চিত পাসওয়ার্ড মেলেনি!");
      return;
    }
    console.log({ name, email, password, photoUrl });
    createWithEmail(email, password)
      .then((result) => {
        const eUser = result.user;
        console.log(eUser);
        setUser(eUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorMessage, errorCode });
        Swal.fire({
          title: errorMessage,
          text: errorCode,
          icon: "question",
        });
      });
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
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 bg-green-200 p-8 flex items-center justify-center">
          <div className="w-full h-64 md:h-full flex items-center justify-center bg-green-300 rounded-lg text-white text-lg font-bold">
            <img
              src={regI}
              alt="Register Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8 lg:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600">Join our community.</p>

          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
          >
            <FaGoogle className="w-5 h-5 mr-3" />
            SignUp with Google
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">Or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Your Full Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="something@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Your Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
                  placeholder="write password"
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={cShow ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={handleCshow}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 cursor-pointer"
                >
                  👁️‍🗨️
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Your Photo URL
              </label>
              <input
                id="photoUrl"
                name="photoUrl"
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter a photo URL"
              />
            </div>
            <input
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              value="Register"
            />
            {/* <button
              type="submit"
              
            >
              Register
            </button> */}
          </form>
          <div className="text-sm text-center">
            Already have an account?
            <Link
              to={"/login"}
              className="font-medium text-green-600 hover:text-green-500 ml-1"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
