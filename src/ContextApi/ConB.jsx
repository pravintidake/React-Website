import React from "react";
import ConC from './ConC';
import {FirstName, LastName} from '../App'

const ConB = () => {
    const Fname = React.useContext(FirstName);
    const Lname = React.useContext(LastName);
    return (
        // <ConC />
        <h1>My Name : {Fname} {Lname}</h1> 
    )
}

export default ConB;