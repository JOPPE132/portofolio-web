import React from 'react';
import "./navigation.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Contact from "../pages/contact.jsx";
import Home from "../pages/home.jsx";
import Career from "../pages/career.jsx";
import NoPage from "../pages/nopage.jsx";



function Navigation() {
    return(
        <header className="header-wrapper">
            <nav className="header-navigation">
                <ul className="header-ul-left">
                    <Link to ="/">Hjem</Link>
                    <Link to ="/career">Karriere</Link>
                    <Link to ="/contact">Contact</Link>
                </ul>
            </nav>
        </header>
        )
}
export default Navigation;