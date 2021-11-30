import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home"
import Menu from "./Menu"
import About from "./About"
import Contact from "./Contact"
import User from "./User"
import Search from "./Search"
import Error from "./Error"

const ReactRouter = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route exact path="/" element={<Home name="Home" />} />
                <Route exact path="/about" element={<About name="About" />} />
                <Route exact path="/search" element={<Search name="Search" />} />
                <Route exact path="/user/:fname/:lname" element={<User name="User" />} />
                <Route exact path="/contact" element={<Contact name="Contact" />} />
                {/* <Route path="*" element={<Error name="Error" />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default ReactRouter;
