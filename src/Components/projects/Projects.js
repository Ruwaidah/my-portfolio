import React, { useState } from "react";
import "./projects.css";
import Refugee from "../images/refugee.png";
import Party from "../images/party.png";
import Child from "../images/child.png";
import Chief from "../images/chief.png";
import Play from "../images/play.png";
import Play1 from "../images/play1.svg";
import Movie from "../images/movie.png";

export default function Projects() {
  const [showProject, setShowProject] = useState({
    allproject: true,
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
  });
  const showOne = (event, project) => {
    if (project === "proj1") {
      setShowProject({
        allproject: false,
        project1: true,
        project2: false,
        project3: false,
        project4: false,
        project5: false,
      });
    } else if (project === "proj2") {
      setShowProject({
        allproject: false,
        project1: false,
        project2: true,
        project3: false,
        project4: false,
        project5: false,
      });
    } else if (project === "proj3") {
      setShowProject({
        allproject: false,
        project1: false,
        project2: false,
        project3: true,
        project4: false,
        project5: false,
      });
    } else if (project === "proj4") {
      setShowProject({
        allproject: false,
        project1: false,
        project2: false,
        project3: false,
        project4: true,
        project5: false,
      });
    } else if (project === "proj5") {
      setShowProject({
        allproject: false,
        project1: false,
        project2: false,
        project3: false,
        project4: false,
        project5: true,
      });
    } else if (project === "all") {
      setShowProject({
        allproject: true,
        project1: false,
        project2: false,
        project3: false,
        project4: false,
        project5: false,
      });
    }
  };

  console.log(showProject);
  return (
    <div className="projects-com">
      <div className="projects-header">
        <h5>Projects at Lambda School </h5>
      </div>
      <div className="dot-btns">
        <div
          className={showProject.allproject ? "pro-btn active-btn" : "dontShow"}
        ></div>
        <div
          className={showProject.project1 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj1")}
        ></div>
        <div
          className={showProject.project2 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj2")}
        ></div>
        <div
          className={showProject.project3 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj3")}
        ></div>
        <div
          className={showProject.project4 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj4")}
        ></div>
        <div
          className={showProject.project5 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj5")}
        ></div>
      </div>
      <div
        className={
          showProject.allproject ? "show-visible playAgin" : "playAgin"
        }
        onClick={(e) => showOne(e, "all")}
      >
        {/* <p>Play SlidShow</p> */}
        <img src={Play1} alt="play-icon" id="play2" />
      </div>
      <div id="slideshow">
        <div
          className={
            showProject.allproject
              ? "slide-wrapper"
              : showProject.project1
              ? "slide-wrapper-proj1"
              : showProject.project2
              ? "slide-wrapper-proj2"
              : showProject.project3
              ? "slide-wrapper-proj3"
              : showProject.project4
              ? "slide-wrapper-proj4"
              : showProject.project5
              ? "slide-wrapper-proj5"
              : null
          }
        >
          <div className="slide">
            <div className="image-title">
              <a
                href="https://frosty-galileo-c1f29c.netlify.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img id="projectImage" src={Refugee} alt="refugees stroies" />
              </a>
              <p className="project-title">Refugee Stories </p>
            </div>
            <ul className="dev-skills">
              <li>Semantic html.</li>
              <li>Style with Css.</li>
              <li>Media queries for fully responsive web design. </li>
              <li>Some javaScipt for animation.</li>
            </ul>
          </div>
          <div className="slide">
            <div className="image-title">
              <a
                href="https://condescending-goldwasser-1df579.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img id="projectImage" src={Party} alt="part-planner-project" />
              </a>
              <p className="pt-2">Party Planner</p>
            </div>
            <ul className="dev-skills">
              <li>Built with HTML, CSS, React, Node.</li>
              <li>Team work project.</li>
              <li>Worked in the front end.</li>
              <li>
                Make POST requests to pass data collected from a form to a
                database.
              </li>
              <li>Styled components library for styling. </li>
            </ul>
          </div>
          <div className="slide">
            <div className="image-title">
              <a
                href="https://child-nutrition-status-tracking.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img id="projectImage" src={Child} alt="child-nutrition" />
              </a>
              <p className="pt-2">Malo (Child-Nutrition-Status-Tracking)</p>
            </div>
            <ul className="dev-skills">
              <li>Built with HTML, CSS, React, Node.</li>
              <li>
                Use the CRUD operations to create, get, update, and delete data.
              </li>
              <li>Use Token for authorization. </li>
              <li>Redux for state management.</li>
              <li>Express for Routing.</li>
              <li>Knex and PostgreSQL for DataBase.</li>
              <li>restrict access to resources, for Country user.</li>
            </ul>
          </div>
          <div className="slide">
            <div className="image-title">
              <a
                href="https://mychifport.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img id="projectImage" src={Chief} alt="Let's Eat" />
              </a>
              <p className="pt-2">Let's Eat </p>
            </div>
            <ul className="dev-skills">
              <li>Built with HTML, CSS, React, Node.</li>
              <li>
                Built a form to input new recipe and send the data with post
                request.
              </li>
              <li>User Can upload image for the recipe.</li>
              <li>Token for authorization. </li>
              <li>Redux for state management.</li>
              <li>Express for Routing.</li>
              <li>Knex and PostgreSQL for DataBase.</li>
              <li>Use cloudinary to upload images</li>
            </ul>
          </div>
          <div className="slide">
            <div className="image-title">
              <a
                id="movie-knight"
                href="https://movie-slater-fe-lac.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img id="projectImage" src={Movie} alt="Let's Eat" />
              </a>
              <p className="pt-2">Movie Knight </p>
            </div>
            <ul className="dev-skills">
              <li>Built with HTML, CSS, React, Node.</li>
              <li>Mobile first application</li>
              <li>
                user can search for a movies by Zipcode with a third part API.
              </li>
              <li>Use oauth to signup/login with google. </li>
              <li>Redux for state management.</li>
              <li>Filter Movies with the selected time, date, and seats.</li>
              <li>Use oauth to signup/login with google.</li>
              <li>
                Use third party API's to show movies that's in theater now
              </li>
              <li>Upload profile image with cloudinary.</li>
              <li>Knex and PostgreSQL for DataBase.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="dot-btns">
        <div
          className={showProject.allproject ? "pro-btn active-btn" : "dontShow"}
        ></div>
        <div
          className={showProject.project1 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj1")}
        ></div>
        <div
          className={showProject.project2 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj2")}
        ></div>
        <div
          className={showProject.project3 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj3")}
        ></div>
        <div
          className={showProject.project4 ? "active pro-btn" : "pro-btn"}
          onClick={(e) => showOne(e, "proj4")}
        ></div>
      </div> */}
    </div>
  );
}
