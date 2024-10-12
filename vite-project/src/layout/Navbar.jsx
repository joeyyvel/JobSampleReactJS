import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItem";
import "./NavbarStyles.css";
function Navbar() {
  return (
    <div>
      {/* 
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/service">Service</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    
    */}
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default Navbar;
