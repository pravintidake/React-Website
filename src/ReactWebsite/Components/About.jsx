import React from "react";
import web from '../../Images/about.svg'
import Commen from "./Commen";

const About = (props) => {
    return (
        <>
            <Commen 
            name="Welcome to About Page"
            imgsrc= {web}
            visit = "/contact"
            btname = 'Contact Us'
            />
        </>
    )
}

export default About;
