import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Authcontext } from "../Context/Authprovider";

const Details = () => {
  const data = useLoaderData();
  const { joined, setJoined } = use(Authcontext);
  const { title, description, date, location, capacity } = data;
  const [isJoined, setIsJoined] = useState(false);
  const onJoin = () => {
    setJoined([...joined, data]);
    setIsJoined(true);
    console.log(joined);
  };
  console.log(data);
  return (
    <>
      <div>
        <h1 className="text-primary fontt-bold text-3xl text-center my-6 ">
          {title}
        </h1>
        <div>
          <div>
            <p>{description}</p>
            <p>Will held on {date}</p>
            <p>{location}</p>
            <p>Around {capacity} people can join!</p>
          </div>
          <div>
            <button disabled={isJoined} onClick={onJoin}>
              <Link className="btn login">Join now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
