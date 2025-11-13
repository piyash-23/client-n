import React from "react";
import Heade from "../Components/header/Heade";
import Upcoming from "../Components/events/Upcoming";
import Feature from "../Components/feature/Feature";

const Home = () => {
  return (
    <>
      <Heade></Heade>
      <Upcoming></Upcoming>
      <Feature></Feature>
    </>
  );
};

export default Home;
