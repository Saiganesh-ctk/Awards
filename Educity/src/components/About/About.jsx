import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_img}
          alt="About"
          className="about-img"
        />
        <img
          src={play_icon}
          alt="Play Icon"
          className="play-icon"
        />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Our university is committed to providing a holistic education that
          empowers students to excel in their chosen fields.
        </p>
        <p>
          We believe in fostering a culture of innovation and creativity,
          encouraging our students to think critically and solve real-world
          problems.
        </p>
        <p>
          Our dedicated faculty and state-of-the-art facilities ensure that
          students receive the support and resources they need to succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
