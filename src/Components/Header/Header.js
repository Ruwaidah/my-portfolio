import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header(props) {
    return (
        <div className="header-com">
            <div className="myname-header">
                <h3>Ruwaidah Alfakhri</h3>
            </div>
            <div className="nav-links">
                <div className={`line ${props.location.pathname === "/projects" ?



                    "projects" :
                    props.location.pathname === "/about-me" ? "aboutme" :
                        props.location.pathname === "/contact-me" ? "contactme" : null
                    }`}></div>
                <div className="aboutme-link">
                    <Link to="/about-me">About Me</Link>
                </div>
                <div className="projects-link">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="contactme-link">
                    <Link to="/contact-me">Contact Me</Link>
                </div>
            </div>
        </div>
    )
}