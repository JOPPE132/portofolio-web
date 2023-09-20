import React from 'react'
import './about.css'

export default function About(){
    return(
        <section id="about-wrapper">
            <div className="about-container">
                <h1 className="about-title">Om meg</h1>
                <p className="about-paragraph">Jeg er en 24 år gammel dataingeniørstudent ved NTNU i Ålesund
                    som snart er ferdig med studiene mine. Min lidenskap ligger innenfor webutvikling, og jeg søker nå etter muligheter
                    som fullstack/frontend-utvikler. Jeg har kompetanse innen HTML, CSS, JavaScript og React, og er
                    selvfølgelig motivert til å utvide mine ferdigheter innen andre frontend-teknologier.

                <br/>
                    <br/>
                    Utover min karriereambisjon har jeg en lidenskap for en aktiv livsstil. Jeg er også en sosial person
                    som ikke sier nei til en mulighet for å samles utenom arbeidstid.
                </p>

            </div>
        </section>
    )
}