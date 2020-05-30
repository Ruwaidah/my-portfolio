import React from "react";
import Image from "../images/ruwaidah.jpeg";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-com">
      {/* <div>
        <img src={Image} className="my-image" alt="ruwaidah-img" />
      </div> */}
      <div className="about-me-para">
        <p>
          {" "}
          <img src={Image} className="my-image" alt="ruwaidah-img" />
          I'm a Full Stuck Web Developer and I have a Bachelor's degree in
          Mathematics and Computer Science. I enjoy solving problems and am a
          life long learner. I have learning agility and apply what I have
          learned in the real world.
        </p>
      </div>
    </div>
  );
}
