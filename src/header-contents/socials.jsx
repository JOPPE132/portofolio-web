import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "./socials.css"

function Socials() {
    return (
        <div className="social-container">
            <ul className="icon-list">
                <li><a href="https://twitter.com" className="icons"><FaTwitter/></a></li>
                <li><a href="https://linkedin.com" className="icons"><FaLinkedin/></a></li>
                <li><a href="https://facebook.com" className="icons"><FaFacebook/></a></li>
            </ul>
        </div>
    );
}

export default Socials;