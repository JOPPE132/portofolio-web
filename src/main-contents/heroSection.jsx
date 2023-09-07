import picturenobg from '../assets/meg-nobg.png'
import './heroSection.css'

export default function HeroSection(){
    return(
        <div className="hero-container">
            <div className="hero-text">
                <p className="hero-description">
                    Hei!
                    <br/>
                    <br/>
                    Jeg er en ferdigutdannet dataingeniør på utkikk etter jobb.
                </p>
                <button className="hero-button">Kontakt meg</button>
            </div>

            <div className="picture-container">
                <img className="picture" src={picturenobg} alt="Meg"/>
            </div>
        </div>
    )
}