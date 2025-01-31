import React from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <ImageCarousel />
      </div>
    </>
  );
};

export default Home;
