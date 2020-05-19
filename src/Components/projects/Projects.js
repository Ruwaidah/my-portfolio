import React, { useState, useEffect } from 'react'
import './projects.css'
import Refugee from '../images/refugee.png'


export default function Projects() {
    let val = 0;
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(val += 1)
        }, 1000)
    }

    return (
        <div className="projects-com">
            <div className="projects-header">
                <h5>Projects at Lambda School </h5>
            </div>
            <div id="slideshow">
                <div class="slide-wrapper">
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
                </div>
            </div>
            <div className="dot-btns">
                <div className="pro-btn active-btn"></div>
                <div className="pro-btn"></div>
                <div className="pro-btn"></div>
                <div className="pro-btn"></div>
                <div className="pro-btn"></div>
            </div>
        </div>
    )
}



