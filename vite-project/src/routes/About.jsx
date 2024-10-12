import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../Components/Hero";
import mountain1 from "../Components/images/mountain.jpg";
import AboutUs from "../Pages/AboutUs";

function About() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-aboutPage"
        btnClass="hide"
        heroImage={mountain1}
        title="About"
      />
      <AboutUs />
    </>
  );
}

export default About;
