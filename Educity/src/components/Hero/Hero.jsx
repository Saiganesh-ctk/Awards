import React from "react";
import "./Hero.css";
import darkarrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for better world</h1>
        <p>
          Join us in our mission to provide quality education for all.Education
          is important for everyone.
        </p>
        <button className="btn">
          Explore more{" "}
          <img
            src={darkarrow}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
