import React, { useState, useEffect } from 'react'
import './projects.css'
import Refugee from '../images/refugee.png'
import Party from '../images/party.png'
import Child from '../images/child.png'
import Chief from '../images/chief.png'
import Play from '../images/play.png'



export default function Projects() {
    const [showProject, setShowProject] = useState({
        allproject: true,
        project1: false,
        project2: false,
        project3: false,
        project4: false
    })
    const showOne = (event, project) => {
        if (project == "proj1") {
            setShowProject({
                allproject: false,
                project1: true,
                project2: false,
                project3: false,
                project4: false
            })
        }

        else if (project == "proj2") {
            setShowProject({
                allproject: false,
                project1: false,
                project2: true,
                project3: false,
                project4: false
            })
        }

        else if (project == "proj3") {
            setShowProject({
                allproject: false,
                project1: false,
                project2: false,
                project3: true,
                project4: false
            })
        }
        else if (project == "proj4") {
            setShowProject({
                allproject: false,
                project1: false,
                project2: false,
                project3: false,
                project4: true
            })
        }
        else if (project == "all") {
            setShowProject({
                allproject: true,
                project1: false,
                project2: false,
                project3: false,
                project4: false
            })
        }


    }
    return (
        <div className="projects-com">
            <div className="projects-header">
                <h5>Projects at Lambda School </h5>
            </div>
            <div id="slideshow">
                <div class={showProject.allproject ? "slide-wrapper" : showProject.project1 ? "slide-wrapper-proj1" : showProject.project2 ? "slide-wrapper-proj2" :
                    showProject.project3 ? "slide-wrapper-proj3" :
                        showProject.project4 ? "slide-wrapper-proj4" : null}>
                    <div class="slide">
                        <div className="image-title">
                            <a
                                href="https://frosty-galileo-c1f29c.netlify.com/index.html"
                                target="_blank"
                            >
                                {" "}
                                <img id="projectImage" src={Refugee} />
                            </a>
                            <p className="project-title">Refugee Stories </p>
                        </div>
                        <ul className="dev-skills">
                            <li>Semantic html.</li>
                            <li>Style with Css.</li>
                            <li>Media queries for fully responsive web design. </li>
                            <li>Some javaScipt in the about page.</li>
                        </ul>
                    </div>
                    <div class="slide">
                        <div className="image-title">
                            <a href="https://condescending-goldwasser-1df579.netlify.com/"
                                target="_blank">
                                {" "}
                                <img id="projectImage" src={Party} />
                            </a>
                            <p className="pt-2">Party Planner</p>
                        </div>
                        <ul className="dev-skills">
                            <li>Team work project.</li>
                            <li>Built with react.</li>
                            <li>Form management.</li>
                            <li>Styled components library for styling. </li>
                        </ul>
                    </div>
                    <div class="slide">
                        <div className="image-title">
                            <a
                                href="https://child-nutrition-status-tracking.now.sh/"
                                target="_blank"
                            >
                                {" "}
                                <img id="projectImage" src={Child} />
                            </a>
                            <p className="pt-2">Malo (Child-Nutrition-Status-Tracking)</p>
                        </div>
                        <ul className="dev-skills" id="malo">
                            <li>Front End
                                <ul>
                                    <li>Built with React.</li>
                                    <li>CRUD operations.</li>
                                    <li>Token for authorization. </li>
                                    <li>Redux for state management.</li>
                                </ul>
                            </li>
                            <li>Back End
                                <ul >
                                    <li>Builyt with Nofe Js.</li>
                                    <li>Express for Routing.</li>
                                    <li>Knex and PostgreSQL for DataBase.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="slide">
                        <div className="image-title">
                            <a href="https://mychifport.now.sh" target="_blank">
                                {" "}
                                <img id="projectImage" src={Chief} />
                            </a>
                            <p className="pt-2">Let's Eat </p>
                        </div>
                        <ul className="dev-skills" id="malo">
                            <li>Front End
                                <ul>
                                    <li>Built with React.</li>
                                    <li>CRUD Operations.</li>
                                    <li>Token for authorization. </li>
                                    <li>Redux for state management.</li>
                                </ul>
                            </li>
                            <li>Back End
                                <ul >
                                    <li>Builyt with Nofe Js.</li>
                                    <li>Express for Routing.</li>
                                    <li>Knex and PostgreSQL for DataBase.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dot-btns">
                <div className={showProject.allproject ? "pro-btn active-btn" : "dontShow"}></div>
                <div className={showProject.project1 ? "active pro-btn" : "pro-btn"} onClick={(e) => showOne(e, "proj1")}></div>
                <div className={showProject.project2 ? "active pro-btn" : "pro-btn"} onClick={(e) => showOne(e, "proj2")}></div>
                <div className={showProject.project3 ? "active pro-btn" : "pro-btn"} onClick={(e) => showOne(e, "proj3")}></div>
                <div className={showProject.project4 ? "active pro-btn" : "pro-btn"} onClick={(e) => showOne(e, "proj4")}></div>
            </div>
            <div className={showProject.allproject ? "show-visible playAgin" : "playAgin"} onClick={(e) => showOne(e, "all")}>
                {/* <p>Play SlidShow</p> */}
                <img src={Play} />
            </div>
        </div>
    )
}



