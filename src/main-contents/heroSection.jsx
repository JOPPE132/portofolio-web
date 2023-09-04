import picture from '../assets/meg.jpg'
import './heroSection.css'
import {Link} from 'react-router-dom'

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
                <Link to="/contact"><button className="hero-button">Kontakt meg</button></Link>
            </div>

            <div className="picture-container">
                <img className="picture" src={picture} alt="Meg"/>
            </div>

        </div>
    )
}