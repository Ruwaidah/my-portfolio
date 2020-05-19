import React from 'react'
import './footer.css'
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'

export default function Footer() {
    return (
        <div className="footer-com">
            <div className="copyright">
                <p> &copy;  Copyright 2020</p>
                <p>Ruwaidah Alfakhri</p>
            </div>
            <div className="links">
                <a href="https://github.com/Ruwaidah" target="_blank"> <img src={Linkedin} /></a>
                <a href="https://www.linkedin.com/in/ruwaidah-a-930b9a8b/" target="_blank"><img src={Github} /></a>
            </div>
        </div>
    )
}