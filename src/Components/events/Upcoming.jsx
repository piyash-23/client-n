import React, { useEffect, useState } from "react";
import Events from "./Events";

const Upcoming = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  const show = event.slice(0, 4);
  return (
    <>
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-center font-bold text-[30px] md:text-[40px] lg:text-[50px] my-3 text-primary">
          Want to join an event?
        </h1>
        <h3 className="text-center font-semibold text-2xl text-primary">
          Here's our upcoming events
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {show.map((eve) => (
            <Events key={eve._id} eve={eve}></Events>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
