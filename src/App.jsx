import React from 'react'
import Header from "./header-contents/header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Career from "./pages/career.jsx";
import Contact from "./pages/contact.jsx";
import NoPage from "./pages/nopage.jsx";

function App() {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;