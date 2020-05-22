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
          Hi, I'm Ruwaidah, I'm a Full Stuck Web Developer and I have a
          bachelor's degree in Mathematics and Computer Science as I took the
          4th place of my cohort so you can tell I enjoy solving problems, I'm
          life long learner. I have learning agility and take what I have
          learned in the real world.
        </p>
      </div>
    </div>
  );
}
