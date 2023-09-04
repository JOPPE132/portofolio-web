import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "./socials.css"

function Socials() {
    return (
        <div className="social-container">
            <ul className="icon-list">
                <li><a href="https://github.com/JOPPE132" className="icons"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/mikkel-stavelie/" className="icons"><FaLinkedin/></a></li>
                <li><a href="https://www.facebook.com/stavelie" className="icons"><FaFacebook/></a></li>
            </ul>
        </div>
    );
}
export default Socials;