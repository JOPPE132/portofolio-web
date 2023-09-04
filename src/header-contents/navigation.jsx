import React from 'react';
import "./navigation.css"
import {Link} from "react-router-dom";


function Navigation() {
    return(
        <header className="header-wrapper">
            <nav className="header-navigation">
                <ul className="header-ul-left">
                    <Link to ="/">Hjem</Link>
                    <Link to ="/career">Karriere</Link>
                    <Link to ="/contact">Kontakt</Link>
                </ul>
            </nav>
        </header>
        )
}
export default Navigation;