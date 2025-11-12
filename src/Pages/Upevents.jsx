import React from "react";
import { useLoaderData } from "react-router";
import Upcominge from "../Components/Upcoming/Upcominge";

const Upevents = () => {
  const events = useLoaderData();
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-primary text-3xl my-7">
          Here's are the events that are coming in future
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((even) => (
            <Upcominge key={even._id} even={even}></Upcominge>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upevents;
