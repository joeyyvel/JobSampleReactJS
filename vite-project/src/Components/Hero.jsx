import React from "react";
import PropTypes from "prop-types";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImage} alt="Hero image" />
      </div>
    </>
  );
}

Hero.propTypes = {
  cName: PropTypes.string,
};

export default Hero;
