import React from 'react'
import Header from "./header-contents/header.jsx";
import Socials from "./header-contents/socials.jsx";
import TechCards from "./main-contents/techCards.jsx";

function App() {
    return(
        <div>
            <Socials/>
            <Header/>
            <TechCards/>
        </div>
    )
}

export default App;