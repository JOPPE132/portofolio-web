import React from 'react'
import './techCards.css'

export default function TechCards(){
    return(
        <div id="tech-stack-wrapper">

            <h1 className="tech-stack-text">Sjekk ut tech-stacken min!</h1>
            <div className="tech-card-wrapper">
                <div className="tech-card">
                    <h1 className="tech-title">Frontend</h1>
                    <ul className="tech-list">
                        <li className="tech-listitem">HTML</li>
                        <li className="tech-listitem">CSS</li>
                        <li className="tech-listitem">JavaScript</li>
                    </ul>
                    <h1 className="tech-framework">Rammeverk</h1>
                    <ul className="tech-list">
                        <li className="tech-listitem">React</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h1 className="tech-title">Backend</h1>
                    <ul className="tech-list">
                        <li className="tech-listitem">Java</li>
                        <li className="tech-listitem">C++</li>
                        <br/>
                    </ul>
                    <h1 className="tech-framework">Rammeverk</h1>
                    <ul className="tech-list">
                        <li className="tech-listitem">Spring boot 3</li>
                        <br/>
                    </ul>
                </div>

                <div className="tech-card">
                    <h1 className="tech-title">Andre verktøy</h1>
                    <ul className="tech-list">
                        <li className="tech-listitem">Git</li>
                        <li className="tech-listitem">Postman</li>
                        <li className="tech-listitem">MySQL</li>
                        <li className="tech-listitem">Figma</li>
                        <li className="tech-listitem">REST</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}