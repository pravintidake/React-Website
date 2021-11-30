import React from "react";
import web from '../../Images/homeimg.svg'
import Commen from "./Commen";

const Home = () => {
    return (
        <>
            <Commen 
            name="Grow Your Bussiness with"
            imgsrc= {web}
            visit = "/services"
            btname = 'Get Started'
            />
        </>
    )
}

export default Home;
