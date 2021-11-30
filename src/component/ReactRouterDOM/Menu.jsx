import React from "react";
import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <>
            <div className="navbar navbar-dark bg-dark">
                <NavLink activeClassName="activeClass" to="/">Home</NavLink>
                <NavLink activeClassName="activeClass" to="/about">About</NavLink>
                <NavLink activeClassName="activeClass" to="/search">Search</NavLink>
                <NavLink activeClassName="activeClass" to="/user/Ashu/Tidake">User</NavLink>
                <NavLink activeClassName="activeClass" to="/contact">Contact</NavLink>
            </div>
            {/* Using Ancor Tag */}
            {/* <a href="/"> Home</a>
            <a href="/contact"> Contact</a>
            <a href="/about"> About</a><br/> */}
            {/* Using NavLink Tag */}

        </>
    )
}

export default Menu;
