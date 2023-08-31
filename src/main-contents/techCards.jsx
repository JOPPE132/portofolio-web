import React from 'react'
import './techCards.css'

export default function TechCards(){
    return(
        <div className="card">
            <h1 className="card-title">Tech stack</h1>
            <p className="card-description">Frontend: HTML, CSS, REACT, Three.js</p>
            <p>Backend: Java, springboot 3, C++, C, rust</p>
        </div>
    )
}