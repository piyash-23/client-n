import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Upcominge from "../Components/Upcoming/Upcominge";

const Upevents = () => {
  const [events, setEvent] = useState([]);
  useEffect(() => {
    fetch("https://social-server-steel.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
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
