import React from 'react'
import './techCards.css'

export default function TechCards(){
    return(
        <div className="tech-stack-wrapper">

            <h1 className="tech-stack-text">Sjekk ut tech-stacken min!</h1>

            <div className="tech-card-wrapper">
                <div className="tech-card">
                    <h1 className="tech-title">Frontend</h1>
                    <ul className="tech-frontend-list">
                        <li className="tech-frontend-listitem">HTML5</li>
                        <li className="tech-frontend-listitem">CSS3</li>
                        <li className="tech-frontend-listitem">JavaScript</li>
                    </ul>
                    <h1 className="tech-title">Rammeverk</h1>
                    <ul className="tech-frontend-list">
                        <li className="tech-frontend-listitem">React.js</li>
                        <li className="tech-frontend-listitem">Three.js</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h1 className="tech-title">Backend</h1>
                    <ul className="tech-frontend-list">
                        <li className="tech-frontend-listitem">Java</li>
                        <li className="tech-frontend-listitem">C++</li>
                        &nbsp;
                    </ul>
                    <h1 className="tech-title">Rammeverk</h1>
                    <ul className="tech-frontend-list">
                        <li className="tech-frontend-listitem">Spring boot 3</li>
                    </ul>
                </div>

                <div className="tech-card">
                    <h1 className="tech-title">Andre verktøy</h1>
                    <ul className="tech-frontend-list">
                        <li className="tech-frontend-listitem">Git</li>
                        <li className="tech-frontend-listitem">Postman</li>
                        <li className="tech-frontend-listitem">Linx CLI</li>
                        <li className="tech-frontend-listitem">MySQL</li>
                        <li className="tech-frontend-listitem">Figma</li>
                    </ul>
                </div>




            </div>
        </div>
    )
}