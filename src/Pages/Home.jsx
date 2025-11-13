import React from "react";
import Heade from "../Components/header/Heade";
import Upcoming from "../Components/events/Upcoming";
import Feature from "../Components/feature/Feature";
import ImageGallery from "../Components/gallery/Gallery";

const Home = () => {
  return (
    <>
      <Heade></Heade>
      <Upcoming></Upcoming>
      <Feature></Feature>
      <ImageGallery></ImageGallery>
    </>
  );
};

export default Home;
