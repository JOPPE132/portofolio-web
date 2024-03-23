import React from 'react'
import './about.css'

export default function About(){
    return(
        <section id="about-wrapper">
            <div className="about-container">
                <h1 className="about-title">Om meg</h1>
                <p className="about-paragraph">Jeg er en 24 år gammel dataingeniørstudent ved NTNU i Ålesund
                    som snart er ferdig med studiene mine. Min lidenskap ligger innenfor utvikling, og jeg søker nå etter jobbmuligheter
                    som java-utvikler/fullstack mobilapp-utvikler/backend-utvikler.
                <br/>
                    <br/>
                    Utover min karriereambisjon har jeg en lidenskap for en aktiv livsstil. Jeg er også en sosial person
                    som ikke sier nei til en mulighet for å samles utenom arbeidstid.
                </p>

            </div>
        </section>
    )
}