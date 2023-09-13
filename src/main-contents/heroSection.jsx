import Picture from '../assets/me2-removebg.png';
import './heroSection.css'

export default function HeroSection(){
    return(
        <div className="hero-container">
            <div className="hero-text">
                <p className="hero-description">
                    Hei!
                    <br/>
                    <br className="br2"/>
                    Jeg er en ferdigutdannet dataingeniør på utkikk etter jobb.
                </p>
                <a href="#contact-wrapper"><button  className="hero-button">Kontakt meg</button></a>
            </div>

            <div className="picture-container">
                <img className="picture" src={Picture}  alt="Meg"/>
            </div>
        </div>
    )
}