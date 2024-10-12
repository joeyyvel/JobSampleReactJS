import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Navbar pages</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
  );
}

export default Navbar;
