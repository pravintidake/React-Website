import React from "react";
import { NavLink } from "react-router-dom"

const Error = (props) => {
    return (
        <><div className="pageContent bg-success">
            <h1>404 Error Page</h1>
            <p>Sorry, This page does not exist.</p>
            <NavLink className="goBack btn btn-danger" to="/">Go Back</NavLink>
        </div>
        </>
    )
}

export default Error;
