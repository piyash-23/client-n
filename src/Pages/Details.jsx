import React from "react";
import { Link, useLoaderData } from "react-router";

const Details = () => {
  const data = useLoaderData();
  const { title, description, date, location, capacity } = data;
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
            <img src="" alt="" />
          </div>
          <div>
            <button>
              <Link className="btn login">Join now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
