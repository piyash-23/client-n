import React from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-8 sm:pt-16 sm:pb-10 px-4 md:px-8 my-4">
      <div className="max-w-7xl mx-auto border-b border-gray-700 pb-10 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="order-1">
            <h4 className="sr-only">Navigation</h4>
            <div className="space-y-3 flex flex-col">
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
          <div className="order-2 md:col-span-1 lg:col-span-1">
            <p className="text-gray-200 mb-4 text-base font-semibold">
              Be part of the change! Get activism news and community updates
              sent to you regularly.
            </p>
            <div className="relative border-b border-gray-500 hover:border-white transition-colors duration-300">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none py-2 pr-10 text-base"
                aria-label="Enter your email for newsletter"
              />
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 p-1"
                aria-label="Subscribe"
              >
                {/* <ArrowRight className="w-6 h-6" /> */}
              </button>
            </div>
          </div>

          <div className="order-3 flex flex-col justify-between space-y-6 md:space-y-0">
            <div className="space-y-3 md:text-right">
              <h4 className="sr-only">Legal</h4>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>

            <div className="space-y-1 text-gray-300 text-sm md:text-right">
              <p className="font-semibold text-white">(+777) 123-456-7890</p>
              <p className="font-semibold text-white">admin@support.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 flex justify-start md:justify-end md:mt-12">
          <div className="flex space-x-3">
            <GrInstagram />
            <FaSquareFacebook />
            <FaXTwitter />
            <IoLogoLinkedin />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 space-y-2 sm:space-y-0">
        <p className="text-center sm:text-left">
          Copyright © 2025 Activizm. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
