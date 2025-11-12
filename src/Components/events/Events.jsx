import React from "react";
import { SlCalender } from "react-icons/sl";
const Events = ({ eve }) => {
  const { title, description, date, location } = eve;
  return (
    <>
      <div>
        <div className="w-full max-w-xl bg-slate-800 text-white rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:shadow-slate-900/50">
          <div className="flex items-center space-x-2 mb-4">
            <SlCalender className="w-5 h-5 text-emerald-300" />
            <p className="text-sm font-medium text-gray-300">{date}</p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-50 mb-2 leading-tight">
            {title}
          </h1>

          <p className="text-base text-gray-400 mb-6">{location}</p>

          <div className="py-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-8 pt-4">
            <button
              className="relative text-lg font-semibold text-emerald-300 group focus:outline-none cursor-pointer"
              onClick={() => console.log("CTA Clicked")}
              aria-label="Be Part of It"
            >
              Be Part of It
              <span className="absolute left-0 bottom-0.5 w-full h-0.5 bg-emerald-300 transition-all duration-300 group-hover:h-1 group-hover:bg-emerald-400"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
