import React from "react";
import PropTypes from "prop-types";
import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div style={{ backgroundColor: "blue" }}>hero page!</div>
      {/*  display image  */}
      <div className={props.cName}>
        <img src={props.heroImage} alt="Hero image" />

        {/* --- Hero text */}
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  cName: PropTypes.string,
  heroImage: PropTypes.any,
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  btnClass: PropTypes.any,
  buttonText: PropTypes.string,
};

export default Hero;
