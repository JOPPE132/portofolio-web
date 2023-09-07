import React from 'react'
import './about.css'

const abouttag = () => {
    return(
        <div>
            <h1 className="about-title">Om meg</h1>
            <p className="about-paragraph">Mitt navn er Mikkel Stavelie. Jeg er
                (snart) en ferdigutdannet dataingeniør fra NTNU Ålesund som søker jobb som
                fullstack/frontend-utvikler. Opprinnelig kommer jeg fra Trondheim. Jeg har røtter fra yrkesutdanning,
                og ble ansatt som lærling hos GK Norge AS i 2017, hvor jeg tok fagbrevet som kuldemontør i 2019.
                Sommeren 2021 ble jeg ansatt som butikkmedarbeider hos Rema 1000, og har vært deltidsansatt der gjennom hele
                studietiden min på NTNU. Jeg tar med meg en rekke gode arbeidserfaringer og rutiner som gjelder
                selvstendighet, nøyaktighet og samarbeid videre inn i arbeidslivet.</p>
        </div>
    )}


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