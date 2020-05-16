import React from 'react';
import Image from "../images/ruwaidah.jpeg";
import "./aboutMe.css"

export default function AboutMe() {


    return (
        <div className="aboutme-com">
            <div>
                <img src={Image} className="my-image" />
            </div>
            <div className="about-me-para">
                <p >Hi I'm Ruwaidah, I'm a Full Stuck Web Developer and I have a bachelor's degree in mathematics and computer application as I took the 4th place of my cohort so you can tel I enjoy solving problems, I aways like to have some code to work on without coding I feel BORING ! </p>
            </div>
        </div>
    )
}