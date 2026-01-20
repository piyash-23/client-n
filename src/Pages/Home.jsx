import React from "react";
import Upcoming from "../Components/events/Upcoming";
import Feature from "../Components/feature/Feature";
import ImageGallery from "../Components/gallery/Gallery";
import ImpactStats from "../Components/Impact Stats/ImpactStats";
import Heade from "../Components/header/Heade";
import WayToCon from "../Components/Ways To Contribute/WayToCon";
import Testimonial from "../Components/Testimonial/Testimonial";
import Partners from "../Components/Partners/Partners";
import NewsLetter from "../Components/News Letter/NewsLetter";

const Home = () => {
  return (
    <>
      <Heade />
      <ImpactStats />
      <Upcoming></Upcoming>
      <WayToCon />
      {/* <Feature></Feature> */}
      <ImageGallery></ImageGallery>
      <Testimonial />
      <Partners />
      <NewsLetter />
    </>
  );
};

export default Home;
