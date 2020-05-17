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
                <img src={Linkedin} />
                <img src={Github} />
            </div>
        </div>
    )
}