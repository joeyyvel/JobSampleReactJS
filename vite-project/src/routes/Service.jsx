import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../layout/Navbar";
import servicePic from "../Components/images/services.jpg";
import Trip from "../Pages/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={servicePic}
        title="Services"
        btnClass="hide"
      />
      <Trip />
    </>
  );
}

export default Service;
