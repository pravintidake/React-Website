import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

const MainPage = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home name="Home" />} />
                <Route exact path="/about" element={<About name="About" />} />
                <Route exact path="/contact" element={<Contact name="Contact" />} />
                <Route exact path="/services" element={<Services name="Services" />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />

        </>
    )
}

export default MainPage;
