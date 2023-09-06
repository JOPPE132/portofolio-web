import React from 'react';
import "./navigation.css"
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

function Navigation() {
    return(
        <header className="header-wrapper">
            <nav className="header-navigation">
                <ul className="container-left">
                    <li><a href="https://github.com/JOPPE132" className="icons"><FaGithub/></a></li>
                    <li><a href="https://www.linkedin.com/in/mikkel-stavelie/" className="icons"><FaLinkedin/></a></li>
                    <li><a href="https://www.facebook.com/stavelie" className="icons"><FaFacebook/></a></li>
                </ul>
                <ul className="container-right">
                    <li className="goToTop"><a href="#">Hjem</a></li>
                    <li><a href="#tech-stack-wrapper">Tech stack</a></li>
                    <li><a href="#tech-stack-wrapper">Karriere</a></li>
                    <li><a href="#tech-stack-wrapper">Kontakt</a></li>
                </ul>
            </nav>
        </header>
        )
}
export default Navigation;