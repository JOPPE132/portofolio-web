import React from 'react'
import Header from "./header-contents/header.jsx";
import HeroSection from "./main-contents/heroSection.jsx";
import TechCards from "./main-contents/techCards.jsx";
import CareerContent from "./main-contents/career-content.jsx";
import ContactForm from "./main-contents/contact-form.jsx";
import About from "./main-contents/about.jsx";

export default function App() {
    return(
        <div>
            <Header/>
            <HeroSection/>
            <About/>
            <TechCards/>
            <CareerContent/>
            <ContactForm/>
        </div>
    )
}