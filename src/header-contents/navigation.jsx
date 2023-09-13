import "./navigation.css"
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

//const ham = document.querySelector(".hamburger");
//const nav = document.querySelector(".container-right");

// ham.addEventListener("click", () => {
//     ham.classList.toggle("active");
//     nav.classList.toggle("active");
// });
//
// document.querySelectorAll(".container-right").forEach(n =>
//     n.addEventListener("click", () => {
//         ham.classList.remove("active");
//         nav.classList.remove("active");
//     } ))

const Socials = () => {
    return(
        <ul className="container-left">
            <li><a href="https://github.com/JOPPE132" className="icons"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/mikkel-stavelie/" className="icons"><FaLinkedin/></a></li>
            <li><a href="https://www.facebook.com/stavelie" className="icons"><FaFacebook/></a></li>
        </ul>
    )
}


function Navigation() {
    return(
        <header className="header-wrapper">
            <nav className="header-navigation">
                <Socials/>
                <ul className="container-right">
                    <li><a href="#">Hjem</a></li>
                    <li><a href="#about-wrapper">Om meg</a></li>
                    <li><a href="#tech-stack-wrapper">Tech stack</a></li>
                    <li><a href="#timeline">Karriere</a></li>
                    <li><a href="#contact-wrapper">Kontakt</a></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
        )
}
export default Navigation;