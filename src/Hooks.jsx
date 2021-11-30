import React, { useState } from "react";

const Hooks = () => {
    // let newTime = new Date().toLocaleTimeString('en-US', { hour12: true });

    // const state = useState(0);
    // const [count, setCount] = state;
    // const [ctime, setTime] = useState(newTime);
    // const UpdateTime = () => {
    //     let refreshedTime = new Date().toLocaleTimeString('en-US', { hour12: true });
    //     setTime(refreshedTime);
    // }

    //For Changing time in every second like digital clock
    // setInterval(UpdateTime, 1000);

    // const IncNum = () => {
    //     setCount(count + 1);
    // }

    //Event Handling in React
    const purple = '#8e44ad';
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");
    const BgChange = () => {
        let newBg = '#34495e';
        setBg(newBg);
        setName('Ouch!!😲')
    }

    const bgBack = () => {
        setBg(purple);
        setName('Ayyo!!😡')
    }

    return (
        <>
            {/* <h1>{count}</h1>
            <button className="btn" onClick={IncNum}>Click Me</button> */}
            {/* <h1>{ctime}</h1> */}
            {/* <button className="btn" onClick={UpdateTime}>Get Time</button> */}
            {/* Event Handling */}
            <button style={{ backgroundColor: bg }} className="btn" onClick={BgChange} onDoubleClick={bgBack}>{name}</button>

        </>
    )
}

export default Hooks;