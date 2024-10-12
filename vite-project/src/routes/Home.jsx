import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Pages/Destination";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero
        cName="hero"
        heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="The Universe"
        text="Don't be the same. BE BETTER!"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
    </div>
  );
}

export default Home;
