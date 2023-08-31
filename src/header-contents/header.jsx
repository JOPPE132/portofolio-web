import React from 'react';
import "./header.css"

function Header() {
    return(
        <header className="header-wrapper">
            <nav className="header-navigation">
                <ul className="header-ul-left">
                    <a href="#">Hjem</a>
                    <li><a href="#">Om meg</a></li>
                    <li><a href="#">Karriere</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
        </header>
        )
}
export default Header;