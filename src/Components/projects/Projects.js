import React from 'react'
import './projects.css'
import Refugee from '../images/refugee.png'


export default function Projects() {
    return (
        <div className="projects-com">
            <div className="first-proj">
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
                <ul>
                    <li>Use semantic html.</li>
                    <li>Style with Css and some javaScipt. </li>
                    <li>Media queries for fully responsive web design. </li>
                </ul>
            </div>
        </div>
    )
}