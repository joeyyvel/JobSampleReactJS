import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../Components/Hero";
import mountain1 from "../Components/images/mountain.jpg";
import AboutUs from "../Pages/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <div>
        <h1>about page</h1>
      </div>
      <Hero cName="hero-aboutPage" heroImage={mountain1} title="About" />
      <AboutUs />
    </>
  );
}

export default About;
